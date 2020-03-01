const conectDB = require('./db/connectDB')
const getSubtitles = require('youtube-captions-scraper').getSubtitles;
const VideoData = require('./db/schemas/youtubeDataSchema');

conectDB();
let arrayNoSubtitle = []
VideoData.find({hasSubtitles:false})
.then((data)=>{
  data.forEach((dataVideo)=>{
    arrayNoSubtitle.push(dataVideo.videoId)
  })
  arrayNoSubtitle.forEach((dataArray)=>{
    getSubtitles({
      videoID:dataArray,
      lang: 'en'
    })
    .then((captions) => {
      VideoData.findOneAndUpdate({videoId:dataArray},{"$set":{hasSubtitles:true},"$push":{legendas:captions}})
      .then((data)=>{
        console.log(dataArray)
      })
    })
    .catch(err=>{
      console.table(dataArray)
    }); 
  })
});




