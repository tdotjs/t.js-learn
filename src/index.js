const path = require('path');
const fs = require('fs');
const glob = require('glob');
const showdown = require('showdown');
const mkdirp = require('mkdirp');
const highlight = require('highlight.js');
const http = require('http');

converter = new showdown.Converter({
  headerLevelStart: 2,
  simplifiedAutoLink: true,
  excludeTrailingPunctuationFromURLs: true,
  literalMidWordUnderscores: true,
  ghCodeBlocks: true,
  ghMentions: true,
  ghMentionsLink: true,
  disableForced4SpacesIndentedSublists: true,
  encodeEmails: true,
});

glob('src/pages/**/*', {}, (er, files) => {
  files.forEach(file => {
    const writePath = path.resolve(path.join('docs', path.relative('src/pages', file)));
    const writeFolder = path.dirname(writePath);
    mkdirp(writeFolder, err => {
      fs.readFile(file, (err, data) => {
        if (err !== null) return;
        if (file.indexOf('.md') == -1) {
          writeTo(writePath, data);
        } else {
          let content = converter.makeHtml(data.toString());
          writeTo(writePath.replace('.md', '.html'), wrapHTML(content));
        }
      });
    });
  });
  const server = http.createServer((req, res) => {
    let reqUrl = req.url;
    if (reqUrl === '/') reqUrl = 'index.html';
    const reqFile = path.resolve(path.join('docs', reqUrl));
    if (fs.existsSync(reqFile)) {
      res.writeHead(200);
      res.write(fs.readFileSync(reqFile));
    } else {
      res.writeHead(404);
    }
    res.end();
  });
  server.listen(3000);
});

async function writeTo(to, content) {
  fs.writeFile(to, content, err => {
    if (err !== null) {
      console.log(`Generate ${path.basename(to)} failed!`);
    } else {
      console.log(`Generate ${path.basename(to)} success!`);
    }
  });
  return this;
}

function wrapHTML(content) {
  return fs
    .readFileSync(path.resolve(__dirname, 'layout.html'))
    .toString()
    .replace(`{{content}}`, content);
}
