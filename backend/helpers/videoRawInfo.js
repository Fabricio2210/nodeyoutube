const elasticsearch = require("elasticsearch");
const client = new elasticsearch.Client({
  host: "localhost:9200",
  log: "trace",
  apiVersion: "7.2", // use the same version of your Elasticsearch instance
});

const videoRawInfo = async (query, page,limit) => {
  client.indices.create({
    index: 'titleschemas',
    body: {
      settings: {
        index: {
          number_of_shards: 1,
          number_of_replicas: 1
        }
      }
    }
  })
  await client.indices.putMapping({
    index: "titleschemas",
    type: "titleschemas",
    includeTypeName: true,
    body: {
      properties: {
        date: {
          type: "date"
        },
        title: {
          type: "text"
        }
      },
    },
  });

  const response = await client.search({
    index: "titleschemas",
    type: "titleschemas",
    from: page * limit + 1,
    size: limit,
    body: query,
  });
  return  {data:response.hits.hits, count:response.hits.total.value}
};

module.exports = videoRawInfo;
