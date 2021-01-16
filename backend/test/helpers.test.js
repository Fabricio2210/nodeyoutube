const chai = require("chai");
const expect = require("chai").expect;
const paginationInfo = require("../helpers/paginationInfo.js");
const subtitleQuery = require("../helpers/querySubtitle");
const titleQuery = require("../helpers/queryTitle");
const countDocuments = require("../helpers/countDocuments");
const videoRawInfo = require("../helpers/videoRawInfo");
const TitleData = require("../db/schemas/youtubeDataSchema");
const videoTitleParseInfo = require("../helpers/videoTitleParseInfo");
const mock = require("./mock");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
describe("test helpers", async () => {
  it("Should return the pagination object", () => {
    let page = 1;
    let totalResults = 31;
    const resultPaginationInfo = paginationInfo(page, totalResults);
    expect(resultPaginationInfo.startIndex).equal(
      mock.paginationInfo(page, totalResults).startIndex,
    );
    expect(resultPaginationInfo.endIndex).equal(
      mock.paginationInfo(page, totalResults).endIndex,
    );
    expect(resultPaginationInfo.totalResults).equal(
      mock.paginationInfo(page, totalResults).totalResults,
    );
    expect(resultPaginationInfo.nextPage).equal(
      mock.paginationInfo(page, totalResults).nextPage,
    );
    expect(resultPaginationInfo.previousPage).equal(
      mock.paginationInfo(page, totalResults).previousPage,
    );
    expect(resultPaginationInfo.totalPages).equal(
      mock.paginationInfo(page, totalResults).totalPages,
    );
  });
  it("Should return subtitle query", () => {
    let req = {
      body: {
        legenda: "",
        title: "",
        selected: "",
        dateFrom: "",
        dateEnd: "",
      },
    };
    const resultSubtitleQueryInfo = subtitleQuery(req, "coders");
    expect(resultSubtitleQueryInfo.subject).equal(
      mock.subtitleQueryOptions(req, "coders").subject,
    );
    expect(resultSubtitleQueryInfo.title.$regex).equal(
      mock.subtitleQueryOptions(req, "coders").title.$regex,
    );
    expect(resultSubtitleQueryInfo.title.$options).equal(
      mock.subtitleQueryOptions(req, "coders").title.$options,
    );
  });
  it("Should return title query", () => {
    let req = {
      body: { title: "vue", selected: "", dateFrom: "", dateEnd: "" },
    };
    const resultTitleQueryInfo = titleQuery(req, "coders");
    expect(resultTitleQueryInfo.subject).equal(
      mock.titleQueryOptions(req, "coders").subject,
    );
    expect(resultTitleQueryInfo.title.$regex).equal(
      mock.titleQueryOptions(req, "coders").title.$regex,
    );
    expect(resultTitleQueryInfo.title.$options).equal(
      mock.titleQueryOptions(req, "coders").title.$options,
    );
  });

  it("Should return total of documents", () => {
    totalResults = 0;
    const query = { subject: "coders", title: { $regex: " ", $options: "i" } };
    const resultCountDocuments = countDocuments(query, TitleData, totalResults);
    expect(resultCountDocuments).eventually.equal(
      mock.countDocuments(query, TitleData, totalResults),
    );
  });
  it("Should return video raw info", () => {
    let startIndex = 0;
    limit = 31;
    const query = { subject: "coders", title: { $regex: " ", $options: "i" } };
    const resultRawVideoInfo = videoRawInfo(
      TitleData,
      query,
      limit,
      startIndex,
    );
    expect(resultRawVideoInfo).eventually.equal(
      mock.videoRawInfo(TitleData, query, limit, startIndex),
    );
  });
  it("Should return video info parsed based on a title search", () => {
    const rawInfo = [
      {
        _id: "5ff220f26e5ec03228b47677",
        videoId: "eaWg6wun86c",
        channelId: "UC29ju8bIPH5as8OGnQzwJyA",
        channelUrl: "http://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA",
        title: "7 Tips To Ace Job Interviews",
        uploader: "Traversy Media",
        dataUpload: "2020-12-23",
        thumbnail: "https://i.ytimg.com/vi/eaWg6wun86c/maxresdefault.jpg",
        subject: "coders",
        date: new Date('2020-12-23'),
        __v: 0,
      },
    ];
    const resultVideoTitleParseInfo = videoTitleParseInfo(rawInfo)
    expect(resultVideoTitleParseInfo[0]._id).equal(mock.videoTitleParseInfo(rawInfo)[0]._id)
    expect(resultVideoTitleParseInfo[0].videoId).equal(mock.videoTitleParseInfo(rawInfo)[0].videoId)
    expect(resultVideoTitleParseInfo[0].channelId).equal(mock.videoTitleParseInfo(rawInfo)[0].channelId)
    expect(resultVideoTitleParseInfo[0].channelUrl).equal(mock.videoTitleParseInfo(rawInfo)[0].channelUrl)
    expect(resultVideoTitleParseInfo[0].title).equal(mock.videoTitleParseInfo(rawInfo)[0].title)
    expect(resultVideoTitleParseInfo[0].uploader).equal(mock.videoTitleParseInfo(rawInfo)[0].uploader)
    expect(resultVideoTitleParseInfo[0].dataUpload).equal(mock.videoTitleParseInfo(rawInfo)[0].dataUpload)
    expect(resultVideoTitleParseInfo[0].thumbnail).equal(mock.videoTitleParseInfo(rawInfo)[0].thumbnail)
    expect(resultVideoTitleParseInfo[0].subject).equal(mock.videoTitleParseInfo(rawInfo)[0].subject)
    expect(resultVideoTitleParseInfo[0].date).equal(mock.videoTitleParseInfo(rawInfo)[0].date)
  });
});
