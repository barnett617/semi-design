import sass from 'sass';
import fs from 'fs-extra';
// OR

const result = sass.compile("./test/test.scss");
fs.writeFileSync("./test/test.css",result.css,{encoding:'utf-8'});
