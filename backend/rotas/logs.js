const router = require('express').Router();
const LogData = require('../db/schemas/LogSchema')

//@route   POST /subject/title
//@desc    Get videos by title
//@access  Public
router.post('/logs',(req,res)=>{
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
    let startIndex = (page -1) * limit
    let endIndex = page * limit
    let totalResults;
    let totalPages = Math.ceil(totalResults / limit)
    let nextPage = page + 1
    let previousPage =  page - 1 

    if(!req.body.userName && !req.body.message && !req.body.hour && !req.body.dateFrom && !req.body.dateEnd){
        res.status(500).json({
            msg:'Fill at least one field'
        })
    }else{
        let query = {};
        if(req.body.userName){
            query.userName = { $regex: req.body.userName, $options: "i" }
        }
        if(req.body.message){
            query.text = { $regex: req.body.message, $options: "i" }
        }
        if(req.body.hour){
            query.hour = { $regex: req.body.hour, $options: "i" }
        }
        if(req.body.dateFrom && req.body.dateEnd){
            query.logDay = {"$gte": req.body.dateFrom,"$lte": req.body.dateEnd}
        }

        
        LogData.countDocuments(query)
        .then((dataNumb)=>{
            totalResults = dataNumb
            LogData.find(query).limit(limit).skip(startIndex)
            .sort({ date: -1 })
            .then((data)=>{
                if(nextPage > totalPages){
                    nextPage = totalPages
                }
                if(previousPage < 1){
                    previousPage = 1
                }
                let arrayDataLogs = []; 
                data.forEach((dataLogs)=>{
                    let {userName,text,hour,logDay} = dataLogs
                    let objectDataLogs = {
                        userName,
                        text,
                        hour,
                        logDay
                      
                    };
                    arrayDataLogs.push(objectDataLogs)
                })
                res.status(200).json({
                   data:arrayDataLogs,
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
                console.log(erro)
            })
        })
    
    }
    console.log(req.body)
 
});



module.exports = router;