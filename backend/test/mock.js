const TitleData = require("../db/schemas/youtubeDataSchema");

const paginationInfo = (page, limit) => {
  let totalResults = 0;
  let objPagination = {
    startIndex: (page - 1) * limit,
    endIndex: page * limit,
    totalResults,
    nextPage: page + 1,
    previousPage: page - 1,
    totalPages: Math.ceil(totalResults / limit),
  };
  return objPagination;
};

const subtitleQueryOptions = (req, subject) => {
  let query = {
    subject,
    title: { $regex: req.body.legenda, $options: "i" },
  };

  if (req.body.title) {
    query.title = { $regex: req.body.title, $options: "i" };
  }
  if (req.body.selected) {
    query.uploader = req.body.selected;
  }
  if (req.body.dateFrom && req.body.dateEnd) {
    query.dataUpload = { $gte: req.body.dateFrom, $lte: req.body.dateEnd };
  }
  return query;
};
const titleQueryOptions = (req, subject) => {
  let query = {
    subject,
    title: { $regex: req.body.title, $options: "i" },
  };

  if (req.body.selected) {
    query.uploader = req.body.selected;
  }
  if (req.body.dateFrom && req.body.dateEnd) {
    query.dataUpload = { $gte: req.body.dateFrom, $lte: req.body.dateEnd };
  }
  return query;
};

const countDocuments = async (query, model) => {
  let totalResults = await model.countDocuments(query);
  return totalResults;
};
const videoRawInfo = async (model, query, limit, startIndex) => {
  let rawData = await model
    .find(query)
    .limit(limit)
    .skip(startIndex)
    .sort({ date: -1 });
  return rawData;
};
const videoTitleParseInfo = (arrayRawInfo) => {
  let arrayDataVideo = [];
  arrayRawInfo.forEach((dataVideo) => {
    let { title, uploader, dataUpload, thumbnail, videoId } = dataVideo;
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
module.exports = {
  paginationInfo,
  subtitleQueryOptions,
  titleQueryOptions,
  countDocuments,
  videoRawInfo,
  videoTitleParseInfo,
};
