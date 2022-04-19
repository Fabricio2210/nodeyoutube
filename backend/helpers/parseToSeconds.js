const parseToSeconds = (timeString) =>{
    let parsedTime = timeString.split(':')
    let parsedToSeconds = (+parsedTime[0]) * 60 * 60 + (+parsedTime[1]) * 60 + (+parsedTime[2]);
    
    return parsedToSeconds
}

module.exports = parseToSeconds