const fs=require("fs");
const a =100;

setImmediate(()=>console.log("setImmediate"));
Promise.resolve("Promise").then(console.log);
fs.readFile("./file.txt","utf-8",()=>{
    setTimeout(() => {
        console.log("2nd Timer");
    }, 0);
    process.nextTick(()=>console.log("2nd nextTick"));
    setImmediate(()=>console.log("2nd setImmediate"));
    console.log("File Reading CB");
});
setTimeout(()=>console.log("Timer Expired"),0);
process.nextTick(()=>console.log("process nextTick"))

function printA(){
    console.log("a=",a);
}
printA();
console.log("Last line of the file.");