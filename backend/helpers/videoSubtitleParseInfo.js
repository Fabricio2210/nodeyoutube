const videoSubtitleParseInfo = (arrayRawInfo) => {
  let arrayDataVideo = [];
  arrayRawInfo.forEach((dataVideo) => {
    let { title, uploader, dataUpload, thumbnail, videoId } = dataVideo;
    let objectDataVideo = {
      title,
      uploader,
      dataUpload,
      thumbnail,
      videoUrl: `https://www.youtube.com/watch?v=${videoId}&feature=youtu.be&t=${parseInt(
        Math.floor(dataVideo.start),
      )}`,
      context: dataVideo.text,
      timeStamp: dataVideo.start,
    };
    arrayDataVideo.push(objectDataVideo);
  });
  console.log(arrayDataVideo)
  return arrayDataVideo;
};

module.exports = videoSubtitleParseInfo;
