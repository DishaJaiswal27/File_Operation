let fs = require("fs");

function display(filePaths){
    let str = "";
    for(let i = 0;i < filePaths.length;i++){
        let content = fs.readFileSync(filePaths[i]);
        str += content + "\n";
    }
    return str;
}

module.exports = {
    displayKey : display
}