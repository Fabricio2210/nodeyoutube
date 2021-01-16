const getSubtitles = require('youtube-captions-scraper').getSubtitles;
const getSubs = async (id) =>{
  const subtitles = await getSubtitles({
    videoID: id,
    lang: 'en'
  })
  return subtitles
}

module.exports = getSubs