const VideoData = require('./db/schemas/youtubeDataSchema');
SubtitlesData = require('./db/schemas/subtitleSchema');
const conectDB = require('./db/connectDB');
const getSubtitles = require('youtube-captions-scraper').getSubtitles;
conectDB()

setTimeout(
    function(){
        SubtitlesData.deleteMany({uploader:"RedLetterMedia"})
        .then((data)=>{
            console.log(data.length)
        })
        // let arrayData = []
        //     // VideoData.findOneAndUpdate({videoId:"9sygqz9IgyU"},{$set:{hasSubtitles:false}})
        //     // .then((data)=>{
        //     //     console.log('data')
        //     // })
        //     // .catch((err)=>{})
                    
        // VideoData.find({uploader:"RedLetterMedia",hasSubtitles: false})
        // .then((data)=>{
           
        //     data.forEach((dataVideo)=>{
        //         getSubtitles({
        //             videoID: dataVideo.videoId,
        //             lang: 'en'
        //           })
        //           .then((data)=>{
        //             console.log(data)
        //           })
        //           .catch((err)=>{
                    
                      
        //           })
        //     })
           
           
        // })
        // console.log(arrayData)
    },5000
)


