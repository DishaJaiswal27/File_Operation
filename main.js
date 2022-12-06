#!/usr/bin/env node

let display = require(".\\commands\\display.js");
let slb = require(".\\commands\\singleLineBreak.js")
let numbering = require(".\\commands\\numberToAll.js");
let number = require(".\\commands\\numbering.js");
let fs = require("fs");


//input command from cmd line
let inputCmds = process.argv.slice(2);


//separate file name and cmds from inputcommand
let fileName = [] ;
let cmd = [] ;
for(let i = 0;i < inputCmds.length;i++){
    if(inputCmds[i].charAt(0) == '-'){
        cmd.push(inputCmds[i]);
    }
    else{
        fileName.push(inputCmds[i]);
    }
}

//check for files 
for(let i = 0; i < fileName.length ; i++){
    if(!fs.existsSync(fileName[i])){
        console.log("File " + fileName[i] +" does not exist!!");
        return;
    }
}

//check for commands
if(cmd.includes("-n") && cmd.includes("-b")){
    console.log("Please input valid command!!!");
    return;
}

let content = display.displayKey(fileName);


//call cmds function as per order
for(let i = 0;i < cmd.length;i++){
    if(cmd[i] == '-n'){
       content =  numbering.numberKey(content);

    }
    else if(cmd[i] == '-s'){
        content = slb.slbKey(content);
    }
    else if(cmd[i] == '-b'){
        content = number.numberToNonEmptyLines(content)

    }
}
console.log(content)