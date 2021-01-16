const SubtitleData = require('../../db/schemas/subtitleSchema')
const dataFormat = (start,dur,text,subtitleId,videoId,channelId,channelUrl,title,uploader,dataUpload,thumbnail,subject,date) =>{
    let dateFixed = `${dataUpload.substring(0,4)}-${dataUpload.substring(4,6)}-${dataUpload.substring(6,8)}`
    let subtitleData = new SubtitleData({
       start,
       dur,
       text,
       subtitleId: `${text}${start}${dur}`,
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
    .catch(()=>{
        console.log(`Legenda ${subtitleId} já salva no banco de dados`)
    })

} 

module.exports = dataFormat