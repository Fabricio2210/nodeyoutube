const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

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
    hasSubtitles:{
        type: Boolean,
        default: true
    },
    legendas:{
        type:[]
    },

    date:{
        type: Date,
        index: true
    }
})
VideoDataSchema.plugin(uniqueValidator)
module.exports = mongoose.model('VideoData',VideoDataSchema)