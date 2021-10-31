class BowlingGame {
  constructor(){
    this.rolls = [];
    this.currentFrame = 1;
  };
  roll(number){
    this.rolls.push(number);
    console.log(`rolled a ${number}`)
  };
  score(){
    console.log(`rolls length is ${this.rolls.length}`);
    let totalScore = 0;
    let currentIndex = 0;
    for(i=0; i < 10; i++){
      if(this.rolls[currentIndex] + this.rolls[currentIndex + 1] == 10){
        totalScore += (this.rolls[currentIndex] + this.rolls[currentIndex + 1] + this.rolls[currentIndex + 2]); 
        console.log(totalScore)  
      }
      else{
        totalScore += this.rolls[currentIndex] + this.rolls[currentIndex + 1];   
        console.log(totalScore)
      };
      currentIndex += 2;
    };
    return totalScore;
  };
  
};



module.exports = BowlingGame;