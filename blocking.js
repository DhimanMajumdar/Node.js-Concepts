const crypto=require("crypto");

console.log("Hello World");

var a =1078698;
var b=20986;

// pbkdf2 - Password Base Key Derivative Function

// Synchronous Function will block the main thread -> do not use this
crypto.pbkdf2Sync("password","salt",5000000,50,"sha512");
console.log("First Key is Generated");

// runs as soon as main thread gets empty
setTimeout(() => {
    console.log("call me right now!!!!");
}, 0); // It will only be called once call stack of main thread is empty

//Async Function
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("Second Key is Generated");
});

function multiplyFn(x,y){
    const result=a*b;
    return result;
}

var c =multiplyFn(a,b);

console.log("Multiplication result is :",c);