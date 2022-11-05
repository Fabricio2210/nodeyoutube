const VideoData = require("../db/schemas/youtubeDataSchema");
const SubtitleData = require("../db/schemas/subtitleSchema");
const paginationInfo = require("../helpers/paginationInfo.js");
const queryTitle = require("../helpers/queryTitle");
const querySubtitle = require("../helpers/querySubtitle");
const countDocuments = require("../helpers/countDocuments");
const videoRawInfo = require("../helpers/videoRawInfo");
const videoTitleParseInfo = require("../helpers/videoTitleParseInfo");
const videoSubtitleParseInfo = require("../helpers/videoSubtitleParseInfo");
const videoAnswer = require("../helpers/videoAnswer");

const defaultRouter = (router, subject) => {
  router.post(`/${subject}/title`, async (req, res) => {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let query = queryTitle(req, subject);
    let {
      startIndex,
      endIndex,
      totalResults,
      nextPage,
      previousPage,
    } = paginationInfo(page, limit);
    let count = await countDocuments(query, VideoData, totalResults);
    if (!req.body.title) {
      res.status(500).json({
        msg: "Required field is empty!",
      });
    } else {
      let rawData = await videoRawInfo(VideoData, query, limit, startIndex);
      let arrayDataVideo = videoTitleParseInfo(rawData);
      videoAnswer(
        res,
        arrayDataVideo,
        startIndex,
        endIndex,
        page,
        count,
        limit,
        nextPage,
        previousPage,
      );
    }
  });

  router.post(`/${subject}/subtitle`, async (req, res) => {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let query = querySubtitle(req, subject);
    let {
      startIndex,
      endIndex,
      totalResults,
      nextPage,
      previousPage,
    } = paginationInfo(page, limit);
    let count = await countDocuments(query, SubtitleData, totalResults);
    if (!req.body.legenda) {
      res.status(500).json({
        msg: "Required field is empty!",
      });
    } else {
      let rawData = await videoRawInfo(SubtitleData, query, limit, startIndex);
      let arrayDataVideo = videoSubtitleParseInfo(rawData);
      videoAnswer(
        res,
        arrayDataVideo,
        startIndex,
        endIndex,
        page,
        count,
        limit,
        nextPage,
        previousPage,
      );
    }
  });
};

module.exports = defaultRouter;
