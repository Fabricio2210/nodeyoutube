const elasticsearch = require("elasticsearch");
const client = new elasticsearch.Client({
  host: "localhost:9200",
  log: "trace",
  apiVersion: "7.2", // use the same version of your Elasticsearch instance
});

const subtitleRawInfo = async (query, page,limit) => {
  client.indices.create({
    index: 'subtitleschemas',
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
    index: "subtitleschemas",
    type: "subtitleschemas",
    includeTypeName: true,
    body: {
      properties: {
        date: {
          type: "date"
        },
        title: {
          type: "text"
        },
        text: {
            type: "text"
          }
      },
    },
  });

  const response = await client.search({
    index: "subtitleschemas",
    type: "subtitleschemas",
    from: page * limit + 1,
    size: limit,
    explain: false,
    body: query,
  });
  return  {data:response.hits.hits, count:response.hits.total.value}
};

module.exports = subtitleRawInfo;
