const mongoose = require('mongoose');
const VideoDataSchema = mongoose.Schema({
    videoId:{
      type: String,
      required: true,
      unique: true  
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
})
VideoDataSchema.index()
module.exports = mongoose.model('VideoData',VideoDataSchema)