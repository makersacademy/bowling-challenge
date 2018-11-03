function ScoreCard() {
    this.card = [];
};

ScoreCard.prototype.update= function(array) {
  this.card.push(array);
}
