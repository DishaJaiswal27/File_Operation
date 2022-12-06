let fs = require("fs");


function singleLineBreak(content){
    
        let arr = content.split(/\r\n|\r|\n/);
        for(let j = 0;j < arr.length;j++){
            if(arr[j] == ''){
                let k = j+1;
                while(arr[k] == ''){
                    arr.splice(k,1);
                } 
            }
        }
        content = arr.join("\n");
       return content;
    
}

module.exports = {
    slbKey : singleLineBreak
}