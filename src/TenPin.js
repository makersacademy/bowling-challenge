function TenPin(){
  this.scoreHistory = [];
  this.roundCount = 1;
  this.score = 0;
  this.frameCount = 0;
  this.maximum = 10;

};

TenPin.prototype.throw = function(number){
  this.scoreHistory.push(number);
  this.frame(number);
};

TenPin.prototype.frame = function(number){
  if (number === 10){
    this.frameCount += 2;
    this.score += number;
  }
  else{ this.frameCount += 1;
        this.score += number;
  }
  if(this.frameCount % 2 == 0 && this.frameCount != 0 ){this.roundCount ++}
};

TenPin.prototype.reset = function(){
  this.scoreHistory = [];
  this.score = 0;
  this.roundCount = 1;
  this.frameCount = 0;
};

TenPin.prototype.count = function(){
  var i,scoreHistoryLength,strike,bonus,bonusSum,scoreSum,add;
  scoreHistoryLength = this.scoreHistory.length;
  strike = 10;
  bonus = [];
  add = 1;

  for(i=0;i<scoreHistoryLength;i += add){
    if(this.scoreHistory[i] === strike){
      bonus.push(this.scoreHistory[i+1]+this.scoreHistory[i+2]);
      add = 1;
    }
    else if(this.scoreHistory[i] + this.scoreHistory[i+1] === strike){
      bonus.push(this.scoreHistory[i + 2]);
      add = 2;
    }

  }
  var bonusSum = bonus.reduce(function(a, b) {return a + b;}, 0);
  var scoreSum = this.scoreHistory.reduce(function(a, b) {return a + b;}, 0);
  console.log(this.scoreHistory);
  console.log(bonus);

  return this.score = bonusSum + scoreSum;
};
