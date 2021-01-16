const queryOptions = (req, subject) => {
  let query = {
    subject,
    title: { $regex: req.body.title, $options: "i" },
  };

  if (req.body.selected) {
    query.uploader = req.body.selected;
  }
  if (req.body.dateFrom && req.body.dateEnd) {
    query.dataUpload = { $gte: req.body.dateFrom, $lte: req.body.dateEnd };
  }
  return query;
};
module.exports = queryOptions;
