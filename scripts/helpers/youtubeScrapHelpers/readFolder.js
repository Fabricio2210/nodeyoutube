const fs = require('fs');
const fsPromises = fs.promises
async function readFolder(subject) {
    try {
       return await fsPromises.readdir(`./${subject}`);
    } catch (err) {
      console.error('Error occured while reading directory!', err);
    }
  }

module.exports = readFolder

