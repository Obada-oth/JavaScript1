// Replace commas in a string
"use strict";
let myString = "hello,this,is,a,difficult,to,read,sentence";
let easyString = myString.replace(/,/g, " ");
console.log(myString.length);
console.log(easyString);
