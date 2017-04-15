//importing 
var Cards = require('./cards.js');

var myName = new Cards.BasicCard("My name is...", "KHANNNNNNNNN");
var bestFriend = new Cards.BasicCard("My best friend is...", "FALKO!");



var testPresident = new Cards.ClozeCard("George Washington was the first president of the United States.", "George Washington")

console.log("Front of the flash card: " + myName.front);
console.log("Back of the flash card: " + myName.back);
console.log('====================================================');

console.log("Front of the flash card: " + bestFriend.front);
console.log("Back of the flash card: " + bestFriend.back);
console.log('====================================================');
console.log("This is the cloze text: " + testPresident.clozeText());
console.log("This is the partial text: " + testPresident.partialText());
console.log("This is the full text: " + testPresident.fullText());
console.log('====================================================');
