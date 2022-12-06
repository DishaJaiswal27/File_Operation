let fs = require("fs");

function numberToNonEmptyLines(content){
    var j = 1;
    var str = "";
    let arr = content.split(/\r\n|\r|\n/);
        for(let k = 0;k < arr.length;k++){
            if(arr[k] != ''){
                str += j + " " + arr[k];
                j++;
            }
            else{
                str += '\n';
            } 
        }
        return str;
    
}

module.exports = {
    numberToNonEmptyLines: numberToNonEmptyLines
}