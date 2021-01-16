const VideoData = require('../VideoData/VideoData')
const SubtitleData = require('../SubtitleData/SubTilteData')

const parseSubs = async (id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subtitles,subject) =>{
    try{
      subtitles.forEach((dataSub) =>{
        let subtitleId = `${id}${dataSub.start}${dataSub.dur}`
        SubtitleData(dataSub.start,dataSub.dur,dataSub.text,subtitleId,id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subject)
      })
      VideoData(id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subject)
    }catch(error){
      if(error.message == `Could not find captions for the video: ${id}`){
        VideoData(id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subject)
     }
     console.log(`Error getting captions: ${error.message}`);
    }
    
  }

  module.exports = parseSubs