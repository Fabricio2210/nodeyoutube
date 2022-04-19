const paginationInfo = require("../helpers/paginationInfo.js");
const queryTitle = require("../helpers/queryTitle");
const querySubtitle = require("../helpers/querySubtitle");
const videoRawInfo = require("../helpers/videoRawInfo");
const subtitleRawInfo = require("../helpers/subtitleRawinfo")
const videoTitleParseInfo = require("../helpers/videoTitleParseInfo");
const videoSubtitleParseInfo = require("../helpers/videoSubtitleParseInfo");
const videoAnswer = require("../helpers/videoAnswer");

const defaultRouter = (router, subject) => {
  router.post(`/${subject}/title`, async (req, res) => {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let query = queryTitle(req, subject);
    let {
      nextPage,
      previousPage,
    } = paginationInfo(page, limit);
    if (!req.body.title) {
      res.status(500).json({
        msg: "Required field is empty!",
      });
    } else {
      let rawData = await videoRawInfo(query,page,limit,req);
      let arrayDataVideo = videoTitleParseInfo(rawData.data);
      videoAnswer(
        res,
        arrayDataVideo,
        page,
        nextPage,
        previousPage,
        limit,
        rawData.count
      );
    }
  });

  router.post(`/${subject}/subtitle`, async (req, res) => {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let query = querySubtitle(req, subject);
    let {
      nextPage,
      previousPage,
    } = paginationInfo(page, limit);
    if (!req.body.legenda) {
      res.status(500).json({
        msg: "Required field is empty!",
      });
    } else {
      let rawData = await subtitleRawInfo(query,page,limit,req);
      let arrayDataVideo = videoSubtitleParseInfo(rawData.data);
      videoAnswer(
        res,
        arrayDataVideo,
        page,
        nextPage,
        previousPage,
        limit,
        rawData.count
      );
    }
  });
};

module.exports = defaultRouter;
