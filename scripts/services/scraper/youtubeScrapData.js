const fs = require("fs");
const fsPromises = fs.promises;
const readFolder = require("../../helpers/youtubeScrapHelpers/readFolder");
const readVttFolder = require("../../helpers/youtubeScrapHelpers/readVtt");
const parseDataFile = require("../../helpers/youtubeScrapHelpers/parseDataFile");
const getSubs = require("../../helpers/youtubeScrapHelpers/getSubs");
const videoData = require ("../../helpers/VideoData/VideoData");

const youtubeScrap = async (subject) => {

  try{
    let folder = await readFolder(subject);
    let vttFolder =  await readVttFolder()

    for await (files of folder){
      const file = await fsPromises.readFile(`./${subject}/${files}`)
      let parseFile = await parseDataFile(file, subject);
      let {id,channel_id,channel_url,title,uploader,upload_date,thumbnail} = parseFile;
      let findVttFile = vttFolder.find(el => el === `${id}.en.txt`)
      if(findVttFile === undefined){
        videoData(id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subject)
        console.log("This video has no subtitles.")
      }else{
        await getSubs(id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subject);
      }
    }
  }catch(error){
   console.log(error)
  }
  
};

module.exports = youtubeScrap;
