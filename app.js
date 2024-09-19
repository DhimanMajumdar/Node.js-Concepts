// require("./xyz.js"); // one module into another

// const obj =require("./sum.js");
// const {x,calculateSum}=require("./calculate/sum");

// // import { x, calculateSum } from "./sum.js";

// const calculateMultiply=require("./calculate/multiply");

// const util=require("node:util"); -> core of nodejs modules list by util object use
// util.

const {calculateMultiply,calculateSum} =require("./calculate");

const data=require("./data.json");

// console.log(JSON.stringify(data));
console.log(data);


var  name="Namaste NodeJS";

var a =10;

var b=20;


// obj.calculateSum(a,b);
// console.log(obj.x);

calculateSum(a,b);
// console.log(x);
calculateMultiply(a,b);


// console.log(globalThis===global);