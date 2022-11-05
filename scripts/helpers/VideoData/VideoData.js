const VideoData = require('../../db/schemas/youtubeDataSchema');
const VideoDataFormat = async ( videoId,channelId,channelUrl,title,uploader,dataUpload,thumbnail,subject )=>{
    let dateFixed = `${dataUpload.substring(0,4)}-${dataUpload.substring(4,6)}-${dataUpload.substring(6,8)}`
    let videoData = new VideoData({
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
    console.log(`Salvando video id:${videoData.videoId} no banco de dados`)
    await videoData.save()
    .catch(()=>{
        console.log(`Video id:${videoData.videoId} já salvo no banco de dados`)
    })
}
module.exports = VideoDataFormat