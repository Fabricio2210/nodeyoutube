const queryOptions = (req, subject) => {
  let query = {
    subject,
   "text":{ $regex: req.body.legenda, $options: "i" }
  };

  if (req.body.title) {
    query.title = { $regex: req.body.title, $options: "i" };
  }
  if (req.body.selected) {
    query.uploader = req.body.selected;
  }
  if (req.body.dateFrom && req.body.dateEnd) {
    query.dataUpload = { $gte: req.body.dateFrom, $lte: req.body.dateEnd };
  }
  return query;
};

module.exports = queryOptions;
