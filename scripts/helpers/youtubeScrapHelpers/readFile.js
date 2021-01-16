const fs = require('fs');
const fsPromises = fs.promises
async function readFile(dataFolder, subject, counter) {
  try {
    const file = await fsPromises.readFile(`./${subject}/${dataFolder[counter]}`);
    return file;
  } catch (err) {
    console.log(err);
  }
}

module.exports = readFile;
