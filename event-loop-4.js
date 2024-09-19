const fs=require("fs");

setImmediate(()=>console.log("setImmediate"));
setTimeout(()=>console.log("Timer Expired"),0);
Promise.resolve("Promise").then(console.log);
fs.readFile("./file.txt","utf-8",()=>{
    console.log("File Reading CB");
});

process.nextTick(()=>{
    process.nextTick(()=>console.log("inner nextTick"));
    console.log("nextTick");
})

console.log("Last line of the file.");