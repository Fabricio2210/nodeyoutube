const fs = require('fs');
const getSubtitles = require('youtube-captions-scraper').getSubtitles;
const UserData = require('./helpers/VideoData/VideoData')
const SubtitleData = require('./helpers/SubtitleData/SubTilteData')

let counter = 0

const youtubeScrap = (subject) => {
  readFolder(subject)
}

const readFolder = (subject) =>{
  fs.readdir(`./${subject}`,(err,dataFolder)=>{
    if(err){
      console.log('Erro')
    };
   readFiles(dataFolder,subject)
  })
}

const readFiles = (dataFolder,subject) =>{
  setInterval(() =>{
    if(counter < dataFolder.length){
      fs.readFile(`./${subject}/${dataFolder[counter]}`,(err,dataFile) =>{
        if(err){
          console.log('Erro na leitura do arquivo')
        }
        parseDataFile(dataFile,subject)
      })
      counter++
    }
  },5000)
}

const parseDataFile = (dataFile,subject) =>{
  let { id,channel_id,channel_url,title,uploader,upload_date,thumbnail } = JSON.parse(dataFile)
  getSubs(id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subject)
}

const getSubs = async (id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subject) =>{
  const subtitles = await getSubtitles({
    videoID: id,
    lang: 'en'
  })
  parseSubs(id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subtitles,subject)
}

const parseSubs = (id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subtitles,subject) =>{
  try{
    subtitles.forEach((dataSub) =>{
      let subtitleId = `${id}${dataSub.start}${dataSub.dur}`
      SubtitleData(dataSub.start,dataSub.dur,dataSub.text,subtitleId,id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subject)
    })
    UserData(id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subject)
  }catch(error){
    if(error.message == `Could not find captions for the video: ${id}`){
      UserData(id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subject)
   }
   console.log(`Error getting captions: ${error.message}`);
  }
  
}
module.exports = youtubeScrap