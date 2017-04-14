//importing 
var Cards = require('./cards.js');

var myName = new Cards.BasicCard("My name is...", "KHANNNNNNNNN");
var bestFriend = new Cards.BasicCard("My best friend is...", "FALKO!");

var testFriend = new Cards.ClozeCard("George Washington was the first president of the United States.", "George Washington")

console.log(myName.front);
console.log(myName.back);

console.log(bestFriend.front);
console.log(bestFriend.back);

console.log(testFriend.clozeText());
console.log(testFriend.partialText());
