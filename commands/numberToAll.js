let fs = require("fs");

function numberToAll(content){
    var j = 1;
    var str = "";
        let arr = content.split(/\r\n|\r|\n/);
        for(let k = 0;k < arr.length;k++,j++){
            str += j + " " + arr[k] +"\n";
        }
        return str;
}

module.exports = {
    numberKey : numberToAll
}