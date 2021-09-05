class bowling {

  constructor(){
      this.rolls = []; 
      this.totalScore = 0
  }

  roll(pins){
      this.rolls.push(pins); 
  }

  totalScore(){
      let score = 0; 
      let rollCount = 0; 
      
      for(let frame = 0; frame < 10; frame++){ 
          
          let firstRoll = this.rolls[rollCount]
          let secondRoll = this.rolls[rollCount + 1]
          let frameScore = firstRoll + secondRoll
          
          score = score + frameScore; 
          rollCount = rollCount + 2
      }
      //console.log(score)
      //debugger;
      //console.log(rollCount, 'rollcount')
      return score;
  }
}
