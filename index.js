//Type1
/*const fs = require('fs');

fs.readFile('./files/starter.txt',(err,data)=>{
    if(err) throw err;
    console.log(data.toString());
})*/

//Type2
const fs = require('fs');
const path = require('path');
//read a file
fs.readFile(path.join(__dirname,'files','starter.txt'),'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);

})

console.log('Hello....');
//write a file

fs.writeFile(path.join(__dirname,'files','reply.txt'),'Nice to meet you.',(err)=>{
    if(err) throw err;
    console.log('operation of file write complete');
//append a file 
    fs.appendFile(path.join(__dirname,'files','reply.txt'),'\n \n yes it is ,Nice to meet you.',(err)=>{
    if(err) throw err;
    console.log('operation of file Append complete');
    //rename a file
        fs.rename(path.join(__dirname,'files','reply.txt'), path.join(__dirname,'files','newReply.txt') ,(err)=>{
        if(err) throw err;
        console.log('operation of file rename complete');


})

})

})
//exit on uncaught Error
process.on ('uncaughtException',err =>{
console.log (`there was an uncaught error: ${err}`);
process.exit(1);
})

