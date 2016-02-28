function Score(){
  this.total = 0
  this.round = 1
  this.roundscore = 0
  this.roundthrow = 0
  this.specials = []
};


Score.prototype.add = function(amount){
if (amount > 10){
  return "No cheating!"
}

for (var i = 0; i < (this.specials.length); i++) {
    this.specials[i].add(amount)
}
for (var i=0; i < (this.specials.length); i++){
  if (this.specials[i].complete){
    this.total += this.specials[i].total;
    this.specials.splice(i,1)
  }
}

  if(this.round > 10 && this.specials.length == 0){
    return "Game over"
  }
  if(amount == 10 && this.round <= 10 && this.roundthrow == 0){
    var strike = new Strike
    this.specials.push(strike)
    this.round += 1
  }
  else if((amount + this.roundscore) == 10  && this.round <= 10){
    var spare = new Spare
    this.specials.push(spare)
    this.round+= 1
    this.roundthrow = 0
    this.roundscore = 0
  }
  else if(this.roundthrow == 1){
    if (this.roundscore + amount < 11){
    this.roundscore += amount
    this.total += this.roundscore
    this.roundthrow = 0
    this.roundscore = 0
    this.round += 1}
    else{
      return "No cheating!"
    }
  }
  else{
    this.roundscore = amount
    this.roundthrow = 1
  }

};
