const path = require('path');
const fs = require('fs');
const glob = require('glob');
const marked = require('marked');
const mkdirp = require('mkdirp');
// Using async version of marked
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
glob('src/pages/**/*', {}, function(er, files) {
  files.forEach(file => {
    const writePath = path.resolve(path.join('docs', path.relative('src/pages', file)));
    const writeFolder = path.dirname(writePath);
    mkdirp(writeFolder, function(err) {
      fs.readFile(file, (err, data) => {
        if (err !== null) return;
        if (file.indexOf('.md') == -1) {
          writeTo(writePath, data);
        } else {
          marked(data.toString(), function(err, content) {
            if (err !== null) return;
            fs.writeFile(writePath, content, err => {
              if (err !== null) {
                console.log(`Generate ${file} failed!`);
              } else {
                console.log(`Generate ${file} success!`);
              }
            });
          });
        }
      });
    });
  });
});
