const videoTitleAnswer = (
  res,
  arrayDataVideo,
  page,
  nextPage,
  previousPage,
  limit,
  totalResults
) => {
  let totalPages = Math.ceil(totalResults / limit);
  const answer = res.status(200).json({
    data: arrayDataVideo,
    page,
    nextPage,
    previousPage,
    totalPages,
    totalResults
  });
  return answer;
};

module.exports = videoTitleAnswer;
