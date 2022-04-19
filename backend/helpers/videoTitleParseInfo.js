const videoTitleParseInfo = (arrayRawInfo) => {
  let arrayDataVideo = [];
  arrayRawInfo.forEach((dataVideo) => {
    let { title, uploader, dataUpload, thumbnail, videoId } = dataVideo._source;
    let objectDataVideo = {
      title,
      uploader,
      dataUpload,
      thumbnail,
      videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
    };
    arrayDataVideo.push(objectDataVideo);
  });
  return arrayDataVideo;
};

module.exports = videoTitleParseInfo;
