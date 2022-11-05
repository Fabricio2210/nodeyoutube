const mongoose = require('mongoose');

const SubtitleSchema = mongoose.Schema({
        start:{
            type: String,
            required: true,
        },
        dur:{
            type: String,
        },
        text:{
            type: String,
            required: true,
        },
    subtitleId:{
        type: String,
        required: true,
        unique: true  
    },
    videoId:{
        type: String,
        required: true,
      },
      channelId:{
          type: String,
          required: true
      },
      channelUrl:{
          type: String,
          required:true
      },
      title:{
          type: String,
          required: true
      },
      uploader:{
          type: String,
          required:true
      },
      dataUpload:{
          type: String,
          required: true
      },
      thumbnail:{
          type: String
      },
      subject:{
          type: String,
          required: true
      },
      date:{
          type: Date,
          index: true
      }
}
)

module.exports = mongoose.model('SubtitleData', SubtitleSchema)
