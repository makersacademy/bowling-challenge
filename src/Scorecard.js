class Scorecard {

  constructor() {
    this.STARTING_SCORE = 0;
    this.score = this.STARTING_SCORE;
    this.previousFrame = 0;
    this.strikesCount = [];
    this.strikeSum = 0;
  }

   isPreviousFrameSpare() {
    return this.previousFrame > 9;
  }

  calculateStrikeTally(){
    for (let i = 0; (i < this.strikesCount.length - 2); i++) {
      this.strikeSum += (this.strikesCount[i] + this.strikesCount[i + 1] + 
        this.strikesCount[i + 2]);
    }}

    roll(value) {
      if (value === "X" ) {
        this.strikesCount.push(10)
        }
      else {
        if (this.isPreviousFrameSpare()){
          this.score += (value[0] * 2)
          this.score += value[1]
        } else if (this.strikesCount.length > 0 ){
            this.strikesCount.push(value[0]);
            this.strikesCount.push(value[1]);
            this.calculateStrikeTally();
            this.score += (this.strikeSum + value[0] + value[1]);
        }
        else {
          this.score += value[0];
          this.score += value[1];
        }
        this.strikesCount = [];
        this.strikeSum = 0;
        this.previousFrame = value[1] + value[0]
        this.consecutiveStrikes  = 0 
        }  
    }


  getCurrentScore() {
    return this.score
  }



};

