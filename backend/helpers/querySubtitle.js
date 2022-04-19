const queryOptions = (req, subject) => {
  let body = {
    query: {
      bool: {
        must: [
          {
            match: {
              subject: subject,
            },
          },
        ],
      },
    },
    sort: [{ date: "desc" }],
  };
  if (req.body.legenda && req.query.searchParams === "matchPhrase") {
    let query = {
      match_phrase: {
        text: req.body.legenda,
      },
    };
    body.query.bool.must.push(query);
  }
  if (req.body.legenda && req.query.searchParams === "matchPhrasePrefix") {
    let query = {
      match_phrase_prefix: {
        text: req.body.legenda,
      },
    };
    body.query.bool.must.push(query);
  }
  if (req.body.selected) {
    let query = {
      match: {
        uploader: req.body.selected
      }
    }
    body.query.bool.must.push(query)
  }
  if (req.body.dateFrom && req.body.dateEnd) {
    let query = {
      range: { date: { gte: req.body.dateFrom, lte: req.body.dateEnd } },
    };
    body.query.bool.must.push(query);
  }
  console.log(req.body);
  
  return body;

}
module.exports = queryOptions;
