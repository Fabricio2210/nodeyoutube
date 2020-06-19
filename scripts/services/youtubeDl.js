const { exec } = require('child_process');
 function yourscript (script){
  exec( `sh ./${script}.sh`, {maxBuffer: 1024 * 50000},
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
} 

module.exports = yourscript