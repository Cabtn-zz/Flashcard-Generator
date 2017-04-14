function BasicCard(front, back) {
    this.front = front;
    this.back = back;
};

function ClozeCard(text, cloze){
    this.text = text;
    this.cloze = cloze;
};

ClozeCard.prototype.clozeText = function() {
    console.log(this.cloze);
}

ClozeCard.prototype.partialText = function() {
    var elips = "..."
    var newstr = this.text.replace(this.cloze, elips)
    if ((this.text).includes(this.cloze)) {
        console.log(newstr); 
    }
    else {
        console.log("Error: Your card doesn't contain that specific word");
    }
}

ClozeCard.prototype.fullText = function() {
    console.log(this.text);
}

module.exports = {
    BasicCard: BasicCard,
    ClozeCard: ClozeCard
};
