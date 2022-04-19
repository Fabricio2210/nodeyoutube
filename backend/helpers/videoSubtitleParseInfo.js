const parseToSeconds = require("./parseToSeconds");

const videoSubtitleParseInfo = (arrayRawInfo) => {
  let arrayDataVideo = [];

  arrayRawInfo.forEach((dataVideo) => {

    let { title, uploader, dataUpload, thumbnail, videoId,text,start } = dataVideo._source;
    let objectDataVideo = {
      title,
      uploader,
      dataUpload,
      thumbnail,
      videoUrl: `https://www.youtube.com/watch?v=${videoId}&feature=youtu.be&t=${parseToSeconds(start)}`,
      context: text,
      timeStamp: start,
    };
    arrayDataVideo.push(objectDataVideo);
  });
  return arrayDataVideo;
};

module.exports = videoSubtitleParseInfo;
