const fs = require("fs");
const readline = require("readline");
const subtitleData = require("../SubtitleData/SubTilteData");
const videoData = require("../VideoData/VideoData");
const getSubs = async (id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subject) =>{

    const fileStream = fs.createReadStream(`./vtt/${id}.en.txt`);
    fileStream.on('error', function(err) {
     console.log(err);
    });
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
   
    for await (const line of rl) {
      console.log(line)
      let timestamp = line.substr(0, 8)
      let splitText = line.substr(8)
      let dataSub = {
        start : timestamp,
        text: splitText
      }
      let subtitleId = `${id}${dataSub.start}`
       subtitleData(dataSub.start,dataSub.text,subtitleId,id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subject)
     }
     videoData(id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subject)
}

module.exports = getSubs