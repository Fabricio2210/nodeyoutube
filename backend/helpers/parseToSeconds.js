const parseToSeconds = (timeString) =>{
    let parseTimeToSeconds
    if(timeString.includes(':')){
    let parsedTime = timeString.split(':')
    parseTimeToSeconds = (+parsedTime[0]) * 60 * 60 + (+parsedTime[1]) * 60 + (+parsedTime[2]);
    console.log(parseTimeToSeconds)
    }else{
        parseTimeToSeconds = parseInt(Math.floor(timeString))
    } 
    console.log(parseTimeToSeconds)
    return parseTimeToSeconds
}

module.exports = parseToSeconds