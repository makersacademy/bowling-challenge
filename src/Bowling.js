var Game = function() {
  this.score = 0;
  this.frame = 0;
  this.frameBall = 1;
  this.frameScore = 0;
  this.scoreCard = [];  
  this.pinsInPlay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  this.strikeBonusA = 0;
  this.strikeBonusB = 0;
  this.spareBonusA = 0;
  this.spareBonusB = 0;
};

Game.prototype.play = function() {
  if(this.frame < 10) {    
    this.knockedDown = [];
    this.frameBall = 0;    
    this.rollBall();  
    this.bonusPoints();   
    this.strikeBonusA-=1;
    this.strikeBonusB-=1;
    this.spareBonusA-=1; 
    this.spareBonusB-=1;
    this.scoreCard.push(this.knockedDown);   
    this.frame += 1;      
  };
  return this.frame; 
};

Game.prototype.rollBall = function() {
  while(this.frameBall < 2) {
    this.frameBall+=1;
    this.frameScore = this.rollScore();
    this.updateScoreCard();
    this.totalScore(); 
  };
  return this.frameScore
};

Game.prototype.rollScore = function() {
  if(this.frameBall==1) { 
    this.firstRoll = Math.floor(Math.random()*11);
    if(this.firstRoll==10) {
      this.frameBall+=1; 
      if(this.strikeBonusA==1) {
        this.strikeBonusB=2;
      } else {
        this.strikeBonusA=2;
      }
    }
    return this.firstRoll
   } else { 
     this.secondRoll = Math.floor(Math.random()*11);  
     this.rollTotal = (this.frameScore+this.secondRoll)     
     while(this.rollTotal>10) {
       this.secondRoll-=1
       this.rollTotal = (this.frameScore+this.secondRoll)
     }   
     if(this.rollTotal==10) {
       if(this.spareBonusA==1) {
        this.spareBonusB=2;
      } else {
        this.spareBonusA=2;
      }
     }
     return this.secondRoll
   };  
};

Game.prototype.updateScoreCard = function() {
  return this.knockedDown.push(this.frameScore);
};

Game.prototype.totalScore = function() {
  workingScore = this.score += this.frameScore
  return workingScore
};

Game.prototype.bonusPoints = function() {
  if(this.strikeBonusA==1) {
    this.strikeBonusA=0;
    return this.score += (this.firstRoll + this.secondRoll)
  }
  if(this.strikeBonusB==1) {
    this.strikeBonusB=0;
    return this.score += (this.firstRoll + this.secondRoll)
  }  
  if(this.spareBonusA==1) {
    this.spareBonusA=0;
    return this.score += this.firstRoll
  }; 
  if(this.spareBonusB==1) {
    this.spareBonusB=0;
    return this.score += this.firstRoll
  };   
 };

Game.prototype.hitPin = function(pin) {
  this.pinsInPlay.splice(pin);
  this.knockedDown.push(pin);
  if(pin != 0) {
    this.frameScore = this.frameScore + 1    
  };
};