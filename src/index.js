const path = require('path');
const fs = require('fs');
const glob = require('glob');
const marked = require('marked');
const mkdirp = require('mkdirp');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: true,
  sanitize: true,
  smartLists: true,
  smartypants: true,
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
          marked(data.toString(), (err, content) => {
            if (err !== null) return;
            writeTo(writePath.replace('.md','.html'), wrapHTML(content));
          });
        }
      });
    });
  });
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
    return fs.readFileSync(path.resolve(__dirname,'layout.html')).toString().replace(`{{content}}`,content);
}