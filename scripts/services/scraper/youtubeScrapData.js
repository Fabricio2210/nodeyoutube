const readFolder = require("../../helpers/youtubeScrapHelpers/readFolder");
const readFile = require("../../helpers/youtubeScrapHelpers/readFile");
const parseDataFile = require("../../helpers/youtubeScrapHelpers/parseDataFile");
const getSubs = require("../../helpers/youtubeScrapHelpers/getSubs");
const parseSubs = require("../../helpers/youtubeScrapHelpers/parseSub");

let counter = 0;

const youtubeScrap = async (subject) => {
  let folder = await readFolder(subject);
  setInterval(async () => {
    if (counter < folder.length) {
      let file = await readFile(folder, subject, counter);
      let parseFile = await parseDataFile(file, subject);
      let {id,channel_id,channel_url,title,uploader,upload_date,thumbnail} = parseFile;
      let subs = getSubs(id);
      subs.then((subtitles) =>{
        parseSubs(id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subtitles,subject)
      })
      counter++;
    }
  }, 5000);
};

module.exports = youtubeScrap;
