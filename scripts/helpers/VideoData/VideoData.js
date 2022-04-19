const elasticsearch = require("elasticsearch");
const client = new elasticsearch.Client({
  host: "https://f422-2804-14d-5c73-6bc4-2d21-16e-45f3-b415.ngrok.io/",
  log: "trace",
  apiVersion: "7.2", // use the same version of your Elasticsearch instance
});

const VideoDataFormat = ( videoId,channelId,channelUrl,title,uploader,dataUpload,thumbnail,subject )=>{
    client.indices.putMapping({
        index: "titleschemas",
        type: "titleschemas",
        includeTypeName: true,
        body: {
          properties: {
            date: {
              type: "date",
            },
          },
        },
      });

    let dateFixed = `${dataUpload.substring(0,4)}-${dataUpload.substring(4,6)}-${dataUpload.substring(6,8)}`
    client.index({
        index: "titleschemas",
        type: "titleschemas",
        body: {
            videoId,
            channelId,
            channelUrl,
            title,
            uploader,
            dataUpload: dateFixed,
            thumbnail,
            subject,
            date: dateFixed
        },
      });
}
module.exports = VideoDataFormat