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
  if (req.body.title && req.query.searchParams === 'match') {
    let query = {
        match: {
          title: req.body.title,
        },
    };
    body.query.bool.must.push(query);
  }
  if(req.body.title && req.query.searchParams === 'fuzz'){
    let query = {
      fuzzy: {
        title: {
          value: req.body.title,
          fuzziness: 1,
        },
      },
    };
    body.query.bool.must.push(query);
  }
  if(req.body.title && req.query.searchParams === 'prefix'){
    let query = {
      prefix: {
        title:{
          value: req.body.title
        }
      }
    }
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

