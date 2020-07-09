const eSearch = require("./emagi-search.js");
const eRandom = require("./emagi-random.js");
const emagify = require("./emagify.js");
const arguments = process.argv;
//console.log(arguments);

if(arguments.includes('search')){console.log(eSearch(arguments[arguments.indexOf('search')+1]));}
else if(arguments.includes('random')){console.log(eRandom(arguments.slice(arguments.indexOf('random')+1,)));}
else if(arguments.includes('convert')){console.log(emagify(arguments.slice(arguments.indexOf('convert')+1,)));}
else{console.log('Thank your for using this app. Please type in your arguments.\
To search given an emoji, please entry search and at least part of a word.\
 To get a random element from an array, please entry random and the array. \
 To transforms emoji words to symbols, please entry convert and the words')}