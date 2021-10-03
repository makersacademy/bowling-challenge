class Game {

  constructor() {
    this.rolls = []; //to store number of pins knocked over in each roll
  }

  roll(pins) {
    this.rolls.push(pins); //save number of pins knocked every roll
  }

  get score() {
    let score = 0; //to keep track of total score
    let rollIndex = 0; //to keep track of which roll
    
    //for each frame (10 in total)
    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
        
      if(this.rolls[rollIndex] === 10){ //if strike
        //apply strike bonus
        score += 10 + this.rolls[rollIndex+1]+this.rolls[rollIndex+2]; 
        rollIndex++; //move onto the next roll
        continue; //move onto next iteration in the loop 
    }

      //sum total pins knocked in this frame (2 rolls)
      let frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1]
        
      if (frameScore === 10) { //if spare
        score += 10 + this.rolls[rollIndex + 2]; //apply spare bonus
      } else {
        score += frameScore; //add reg framescore to total score
      }
      
      rollIndex += 2 //move onto the first roll of the next frame
    }

    return score;
  }

  
  
}