const prompt = require('prompt-sync')();

interface frame{
  roll1: number,
  roll2: number,
  roll3?: number,
  score: number,
  calculated: boolean,
}

class Bowling{
  scoreCard: Array<frame> = [];
  currentRoll: number;

  constructor() {
    for (let i = 0; i < 9; i++){
      const emptyFrame = {
        roll1: -1,
        roll2: -1,
        score: -1,
        calculated: false
      }
      this.scoreCard.push(emptyFrame);
    }
    const lastFrame = {
      roll1: -1,
      roll2: -1,
      roll3: -1,
      score: -1,
      calculated: false
    }
    this.scoreCard.push(lastFrame);
    
    this.currentRoll = 0;
  }

  run(){
    console.log('Welcome to Bowling!\n');

    this.scoreCard.forEach((frame, index) => {
      console.log(`Frame: ${index + 1}, Roll: ${this.currentRoll}`);
      console.table(this.scoreCard);
      this.getFrame(index);
      this.checkSpares(index);
      this.checkStrikes(index);
    });

  }

  getInput(frame: number): number{
    let score: number;
    while (true) {
      const input: string = prompt('What was your score? ');
      // check that the user input is a digit
      if (input.match(/^[0-9]+$/) == null) {
        console.log('You must enter a number!');
        continue;
      }
      score = parseInt(input);

      if (score > 10 || score < 0){
        console.log("That's impossible!");
        continue;
      }

      // check that the user input is a valid score
      if (this.currentRoll == 1 && score + this.scoreCard[frame].roll1 > 10){
        console.log("That's more than a spare!");
        continue
      }
      break;
    }
    return score;
  }

  getFrame(frame: number): void {
    // Gets the scores for the current frame
    const firstRoll = this.getInput(frame);
    this.scoreCard[frame].roll1 = firstRoll;
    if (firstRoll == 10) return; // it's a strike so we'll stop here
    
    const secondRoll = this.getInput(frame);
    this.scoreCard[frame].roll2 = secondRoll;
    if (firstRoll + secondRoll < 10){
      this.scoreCard[frame].score = firstRoll + secondRoll;
      this.scoreCard[frame].calculated = true;
    }
  }

  checkSpares(frame: number): void {
    // check all frames, up to the frame provided, 
    // for any frames that need to calculate spares
    // and calculate them
    for (let i = 0; i < frame; i++){
      if (this.scoreCard[i].calculated) continue;
      if (this.scoreCard[i].roll1 + this.scoreCard[i].roll2 == 10 && this.scoreCard[i+1].roll1 != -1){
        // calculate the score for the spare
        this.scoreCard[i].score = this.scoreCard[i].roll1 + this.scoreCard[i].roll2 + this.scoreCard[i+1].roll1;
      }
    }
  }

  checkStrikes(frame: number): void {
    // check all frames, up to the frame provided, 
    // for any frames that need to calculate strikes
    // and calculate them
    for (let i = 0; i < frame; i++){
      if (this.scoreCard[i].calculated) continue;
      
      if (this.scoreCard[i].roll1 == 10){
        // calculate the score for the spare
        const nextScores = [this.scoreCard[i+1].roll1, this.scoreCard[i+1].roll2, this.scoreCard[i+2].roll1]
        console.log(nextScores);
        let bonusScore = 0;
        let addedScores = 0;
        for (let score of nextScores) {
          if (score != -1) {
            bonusScore += score;
            addedScores++;
          }
          if (addedScores == 2) break;
        };
        if (addedScores == 2){
          this.scoreCard[i].score = 10 + bonusScore;
          this.scoreCard[i].calculated = true;
        }
      }
    }
  }
}

const bowling = new Bowling;
bowling.run();

export default Bowling;