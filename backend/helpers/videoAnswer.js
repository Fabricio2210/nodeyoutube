const videoTitleAnswer = (
  res,
  arrayDataVideo,
  startIndex,
  endIndex,
  page,
  totalResults,
  limit,
  nextPage,
  previousPage,
) => {
  let totalPages = Math.ceil(totalResults / limit);
  const answer = res.status(200).json({
    data: arrayDataVideo,
    startIndex,
    endIndex,
    page,
    totalPages,
    nextPage,
    previousPage,
    totalResults,
  });
  return answer;
};

module.exports = videoTitleAnswer;
