const fs = require('fs');
const getSubtitles = require('youtube-captions-scraper').getSubtitles;
const UserData = require('./helpers/UserData/UserData')

const youtubeScrap = (subject)=>{
  let videoDir =[];
  let videoId = [];
  fs.readdir('./json',(err,data)=>{
    if(err){
      console.log('Erro')
    };
    videoDir.push(data);
    videoDir.map((data)=>{
      data.forEach((data)=>{
        fs.readFile(`./json/${data}`,(err,data)=>{
          if(err){
            console.log('erro na leitura do arquivo')
          }
          let { id,channel_id,channel_url,title,uploader,upload_date,thumbnail } = JSON.parse(data)
          videoId.push(id)
            getSubtitles({
              videoID: id,
              lang: 'en'
            })
            .then((captions) => {
              UserData(id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subject,captions)
            })
            .catch(err=>{
              let caption = 'video sem legendas'
              UserData(id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subject,caption)
            }); 
        });
      });
    });    
  });
};
module.exports = youtubeScrap