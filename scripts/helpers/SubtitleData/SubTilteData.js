const elasticsearch = require("elasticsearch");
const client = new elasticsearch.Client({
  host: "https://f422-2804-14d-5c73-6bc4-2d21-16e-45f3-b415.ngrok.io/",
  log: "trace",
  apiVersion: "7.2", // use the same version of your Elasticsearch instance
});
const dataFormat = async (start,text,subtitleId,videoId,channelId,channelUrl,title,uploader,dataUpload,thumbnail,subject,date) =>{
   await client.indices.putMapping({
        index: "subtitleschemas",
        type: "subtitleschemas",
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
    await client.index({
        index: "subtitleschemas",
        type: "subtitleschemas",
        body: {
            start,
            text,
            subtitleId: `${text}${start}`,
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

module.exports = dataFormat