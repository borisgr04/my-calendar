const fs = require('fs-extra');
const concat = require('concat');
const package = require('./package.json');

(async function build() {
  const files = [
    './dist/my-calendar/vendor.js',
    './dist/my-calendar/runtime.js',
    './dist/my-calendar/polyfills.js',
    './dist/my-calendar/polyfills-es5.js',
    './dist/my-calendar/main.js'
  ];

  var files2 = files.filter(function (value, index, arr) {
    return fs.pathExistsSync(value);
  });
  
  const dir = `./dist/elements/${package.version}`;

  await fs.ensureDir(dir);

  await concat(files2, `${dir}/my-calendar.js`);

  await fs.copyFile(
    './dist/my-calendar/styles.css',
    `${dir}/my-calendar.css`
  );
})();