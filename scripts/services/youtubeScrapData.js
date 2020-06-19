const fs = require('fs');
const getSubtitles = require('youtube-captions-scraper').getSubtitles;
const UserData = require('./helpers/UserData/UserData')
const SubtitleData = require('./helpers/SubtitleData/SubTilteData')
let counter = 0
const youtubeScrap = (subject)=>{
  fs.readdir(`./${subject}`,(err,data)=>{
    if(err){
      console.log('Erro')
    };
    setInterval(()=>{
      if(counter < data.length){
        fs.readFile(`./${subject}/${data[counter]}`,(err,data)=>{
          if(err){
            console.log('erro na leitura do arquivo')
          }
          let { id,channel_id,channel_url,title,uploader,upload_date,thumbnail } = JSON.parse(data)
          const getSubs = async ()=>{
            try{
              const subtitles = await getSubtitles({
                videoID: id,
                lang: 'en'
              })
               subtitles.forEach((data)=>{
                 let subtitleId = `${id}${data.start}${data.dur}`
                  SubtitleData(data.start,data.dur,data.text,subtitleId,id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subject)
              })
             
              return UserData(id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subject)
            }
            catch (error) {
              if(error.message == `Could not find captions for video: ${id}`){
                console.log('VAI SE FUDER!!!')
                 UserData(id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subject)
              }
              console.log(`Error getting captions: ${error.message}`);
            }
           
          }
          (async()=>{
            const subtitlesfinal = await getSubs()
          })()
        })
        
        counter++;
      }else
        return;
    }, 5000);     
  });
};
module.exports = youtubeScrap