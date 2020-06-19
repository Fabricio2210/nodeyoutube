const router = require('express').Router();
const VideoData = require('../db/schemas/youtubeDataSchema');
const SubtitleData = require('../db/schemas/subtitleSchema')
//@route   GET /
//@desc    Test
//@access  Public

router.get('/',(req,res)=>{
    res.send('teste')
});

//@route   POST /subject/title
//@desc    Get videos by title
//@access  Public
router.post('/coders/title',(req,res)=>{
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
    let startIndex = (page -1) * limit
    let endIndex = page * limit
    let totalResults;
    let totalPages = Math.ceil(totalResults / limit)
    let nextPage = page + 1
    let previousPage =  page - 1 

    if(!req.body.title){
        res.status(500).json({
            msg:'Required field is empty stoopid!'
        })
    }else{
        let query = {
            subject:"coders",
            title: { $regex: req.body.title, $options: "i" }
        };
        if(req.body.selected){
            query.uploader = req.body.selected
        }
        if(req.body.dateFrom && req.body.dateEnd){
            query.dataUpload = {"$gte": req.body.dateFrom,"$lte": req.body.dateEnd}
        }

        
        VideoData.countDocuments(query)
        .then((dataNumb)=>{
            totalResults = dataNumb
            VideoData.find(query).limit(limit).skip(startIndex)
            .sort({ date: -1 })
            .then((data)=>{
                if(nextPage > totalPages){
                    nextPage = totalPages
                }
                if(previousPage < 1){
                    previousPage = 1
                }
                let arrayDataVideo = []; 
                data.forEach((dataVideo)=>{
                    let {title,uploader,dataUpload,thumbnail,videoId} = dataVideo
                    let objectDataVideo = {
                        title,
                        uploader,
                        dataUpload,
                        thumbnail,
                        videoUrl:`https://www.youtube.com/watch?v=${videoId}`
                    };
                    arrayDataVideo.push(objectDataVideo)
                })
                res.status(200).json({
                   data:arrayDataVideo,
                   startIndex,
                   endIndex,
                   page,
                   totalPages: Math.ceil(totalResults / limit),
                   nextPage,
                   previousPage,
                   totalResults
                })
               
            })
            .catch((erro)=>{
                res.status(500).json({
                    msg:'Server error'
                })
            })
        })
    
    }
 
});

//@route   POST /subject/subtitles
//@desc    Get videos by subtitles
//@access  Public

router.post('/coders/subtitle',(req,res)=>{
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
    let startIndex = (page -1) * limit
    let endIndex = page * limit
    let totalResults;
    let totalPages = Math.ceil(totalResults / limit)
    let nextPage = page + 1
    let previousPage =  page - 1 

   
    
    if(!req.body.legenda){
        res.status(500).json({
            msg:'Required field is empty stoopid!'
        })
    }else{
        let query = {
            subject:"coders",
            "text":{ $regex: req.body.legenda, $options: "i" },
           
        };
        
        if (req.body.title) {
            query.title = { $regex: req.body.title, $options: "i" };
        }
        if(req.body.selected){
            query.uploader = req.body.selected
        }
        if(req.body.dateFrom && req.body.dateEnd){
            query.dataUpload = {"$gte": req.body.dateFrom,"$lte": req.body.dateEnd}
        }
       
        SubtitleData.countDocuments(query)
        .then((dataNumb)=>{
        totalResults = dataNumb
        SubtitleData.find(query).limit(limit).skip(startIndex)
        .sort({ date: -1 })
        .then((data)=>{
            if(nextPage > totalPages){
                nextPage = totalPages
            }
            if(previousPage < 1){
                previousPage = 1
            }
            let arrayDataVideo = []; 
            data.forEach((dataVideo)=>{
                let {title,uploader,dataUpload,thumbnail,videoId} = dataVideo
                let objectDataVideo = {
                    title,
                    uploader,
                    dataUpload,
                    thumbnail,
                    videoUrl:`https://www.youtube.com/watch?v=${videoId}&feature=youtu.be&t=${parseInt(Math.floor(dataVideo.start))}`,
                    context: dataVideo.text,
                    timeStamp: dataVideo.start
                };
                arrayDataVideo.push(objectDataVideo)
            })
            res.status(200).json({
                data:arrayDataVideo,
                startIndex,
                endIndex,
                page,
                totalPages: Math.ceil(totalResults / limit),
                nextPage,
                previousPage,
                totalResults
            })
        })
        .catch((erro)=>{
            res.status(500).json({
                msg:'Server Error'
            })
          
        })
    })
    }
    
})

module.exports = router;