const chai = require("chai");
const expect = require("chai").expect;
const chaiAsPromised = require("chai-as-promised");
const fs = require("fs").promises;
const readFolder = require("../helpers/youtubeScrapHelpers/readFolder");
const readFiles = require("../helpers/youtubeScrapHelpers/readFile");
const parseDataFile = require("../helpers/youtubeScrapHelpers/parseDataFile");
const subs = require("../helpers/youtubeScrapHelpers/getSubs");
const mockDir = require("./mocks");
const realBuffer = Buffer.from(mockDir.bufferMock, "utf8");

chai.use(chaiAsPromised);
fs.readdir = () => Promise.resolve(mockDir.arrayDirMock);
fs.readFile = () => Promise.resolve(realBuffer);

describe("Testing scraper helpers", () => {
  it("Should return an array of names of the files from the coders folder", async () => {
    const result = await readFolder();
    expect(result).equal(mockDir.arrayDirMock);
  });

  it("Should return buffer from the file", async () => {
    let subject = "coders";
    let counter = 0;
    let dataFolder = [
      "coders/#2 API Design & Project Setup _ Build a Complete App with GraphQL, Node.js, MongoDB and React.js.info.json",
    ];
    const resultFile = await readFiles(dataFolder, subject, counter);
    expect(resultFile).equal(realBuffer);
  });

  it("Should return the JSON data parsed", async () => {
    let subject = "coders";
    let id = mockDir.id;
    let channel_id = mockDir.channel_id;
    let title = mockDir.title;
    let uploader = mockDir.uploader;
    let upload_date = mockDir.upload_date;
    let thumbnail = mockDir.thumbnail;

    const resultParseFile = await parseDataFile(realBuffer, subject);
    expect(resultParseFile.id).equal(id);
    expect(resultParseFile.channel_id).equal(channel_id);
    expect(resultParseFile.title).equal(title);
    expect(resultParseFile.uploader).equal(uploader);
    expect(resultParseFile.upload_date).equal(upload_date);
    expect(resultParseFile.thumbnail).equal(thumbnail);
  });
  it("Should return the subtitles array", () => {
    const resultSubs = subs(mockDir.id);
    let lentArray = mockDir.subs.length;
    return expect(resultSubs).eventually.have.length(lentArray);
  });
});
