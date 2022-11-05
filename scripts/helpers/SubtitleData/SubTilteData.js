const SubtitleData = require('../../db/schemas/subtitleSchema')
const dataFormat = (start,text,subtitleId,videoId,channelId,channelUrl,title,uploader,dataUpload,thumbnail,subject,date) =>{
    let dateFixed = `${dataUpload.substring(0,4)}-${dataUpload.substring(4,6)}-${dataUpload.substring(6,8)}`
    let subtitleData = new SubtitleData({
       start,
       text,
       subtitleId: `${text}${start}`,
       videoId,
       channelId,
       channelUrl,
        title,
        uploader,
        dataUpload: dateFixed,
        thumbnail,
        subject,
        date: dateFixed
    });
    console.log(`Salvando a legenda ${subtitleId} no banco de dados`)
    subtitleData.save()
    .catch((error)=>{
        console.log(error)
    })

} 

module.exports = dataFormat