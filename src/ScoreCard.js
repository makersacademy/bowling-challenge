class ScoreCard {
  constructor(){
    // this.gameTotal = 0;
    this.frame = 0;
    this.rolls = [];
  
  }

  // roll number is inputted by user
 
  getTotal(){
    var gameTotal = 0;
   for(var i = 0; i < 20; i++){
      gameTotal = gameTotal + this.rolls[i];
    }
   return gameTotal; 
  
  }

  roll(pinsDown){
    this.rolls.push(pinsDown);
  }

  
  }
    

