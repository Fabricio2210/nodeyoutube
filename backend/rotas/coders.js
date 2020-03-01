const router = require('express').Router();
const VideoData = require('../db/schemas/youtubeDataSchema');


//@route   POST /subject/title
//@desc    Get videos by title
//@access  Public
router.post('/coders/title',(req,res)=>{
    if(!req.body.title){
        res.status(500).json({
            msg:'Required field is empty!'
        })
    }else{
        console.log(req.body)
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

        VideoData.find(query)
        .sort({ date: -1 })
        .then((data)=>{
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
               data:arrayDataVideo
            })
        })
        .catch((erro)=>{
            res.status(500).json({
                msg:'Server error'
            })
        })
    }
 
});

//@route   POST /subject/subtitles
//@desc    Get videos by subtitles
//@access  Public

router.post('/coders/subtitle',(req,res)=>{
    console.log(req.body)
    if(!req.body.legenda){
        res.status(500).json({
            msg:'Required field is empty!'
        })
    }else{
        let query = {
            subject:"coders",
            "legendas.text":{ $regex: req.body.legenda, $options: "i" },
           
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

        VideoData.find(query)
        .sort({ date: -1 })
        .then((data)=>{
            let arrayDataVideo = []; 
            data.forEach((dataVideo)=>{
                function findSub(el){
                    return  el.text.includes(req.body.legenda)
                }
                let filtered = dataVideo.legendas.filter(findSub)
                filtered.forEach(data =>{
                    let {title,uploader,dataUpload,thumbnail,videoId} = dataVideo
                    let objectDataVideo = {
                        title,
                        uploader,
                        dataUpload,
                        thumbnail,
                        videoUrl:`https://www.youtube.com/watch?v=${videoId}&feature=youtu.be&t=${parseInt(Math.floor(data.start))}`,
                        context: data.text,
                        timeStamp: data.start
                    };
                    arrayDataVideo.push(objectDataVideo)
                }) 
             })
            res.status(200).json({
                data:arrayDataVideo
            })
        })
        .catch((erro)=>{
            res.status(500).json({
                msg:'Server Error'
            })
            console.log(erro)
        })
    }
})

module.exports = router;