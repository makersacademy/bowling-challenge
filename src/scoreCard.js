function ScoreCard() {
   this.total = 0;
 }

 ScoreCard.prototype.roll = function(number) {
   this.total += number;
 };
