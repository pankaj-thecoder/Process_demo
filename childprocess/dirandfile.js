const fs = require('fs-extra');

const folderName = './myfolder';
fs.emptyDirSync('./myfolder')

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}
for(let i=0;i<5000;i++){

const content = `hi!.This is the content of file${i}`;

fs.writeFile(`./myfolder/test ${i}.txt`, content, err => {
  if (err) {
    console.error(err);
  }
  
});}
