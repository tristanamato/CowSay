const myInformation = require('./information.js');
const cowsay = require('cowsay 
const message = `My name is ${myInformation.name}  from ${myInformation.campus}`;
const cowMessage = cowsay.say({text: message});

console.log(cowMessage);