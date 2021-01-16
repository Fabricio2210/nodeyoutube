const parseDataFile = async (dataFile,subject) =>{
  let { id,channel_id,channel_url,title,uploader,upload_date,thumbnail } = JSON.parse(dataFile)
  return {id,channel_id,channel_url,title,uploader,upload_date,thumbnail,subject}
}

module.exports = parseDataFile