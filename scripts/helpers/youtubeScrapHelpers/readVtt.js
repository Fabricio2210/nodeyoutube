const fs = require('fs');
const fsPromises = fs.promises
async function readVttFolder() {
    try {
       return await fsPromises.readdir(`./vtt`);
    } catch (err) {
      console.error('Error occured while reading directory!', err);
    }
  }

module.exports = readVttFolder
