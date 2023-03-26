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
  }

  run(){
    console.log('Welcome to Bowling!\n');

    this.scoreCard.forEach((frame, index) => {
      console.table(this.scoreCard);
      this.getFrame(index);
      this.checkSpares(index);
      this.checkStrikes(index);
    });
    this.printFinalScore();
  }

  getInput(frame: number, roll: number): number{
    let score: number;
    while (true) {
      const input: string = prompt('What was your score? ');
      // check that the user input is a digit
      if (input.match(/^[0-9]+$/) == null) {
        console.log('You must enter a number!');
        continue;
      }
      score = parseInt(input);

      // check that it' a number in range
      if (score > 10 || score < 0){
        console.log("That's impossible!");
        continue;
      }

      // check that the user input is a valid score
      if (roll == 1 && score + this.scoreCard[frame].roll1 > 10 && frame != 9){
        console.log("That's more than a spare!");
        continue
      }
      break;
    }
    return score;
  }

  getFrame(frame: number): void {
    // Gets the scores for the current frame
    const firstRoll = this.getInput(frame, 0);
    this.scoreCard[frame].roll1 = firstRoll;
    if (firstRoll == 10 && frame != 9) return; // it's a strike so we'll stop here
    
    const secondRoll = this.getInput(frame, 1);
    this.scoreCard[frame].roll2 = secondRoll;
    if (firstRoll + secondRoll < 10 && frame != 9){
      this.scoreCard[frame].score = firstRoll + secondRoll;
      this.scoreCard[frame].calculated = true;
    }
    if (frame < 9 && this.scoreCard[9].roll1 != 10) return;
    // last frame, bonus roll
    const thirdRoll = this.getInput(9, 2);
    this.scoreCard[9].roll3 = thirdRoll;
    this.scoreCard[9].score = firstRoll + secondRoll + thirdRoll;
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
        this.scoreCard[i].calculated = true;
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
        // const nextScores = [this.scoreCard[i+1].roll1, this.scoreCard[i+1].roll2, this.scoreCard[i+2].roll1]
        
        let nextScores = this.scoreCard.slice(i, 10).map(frame => [frame.roll1, frame.roll2]).flat();
        nextScores[0] = -1;
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

  printFinalScore(): void{
    const finalScores = this.scoreCard.map(frame => {
      return{
        roll1: frame.roll1,
        roll2: frame.roll2 == -1 ? 0 : frame.roll2,
        roll3: frame.roll3 || '',
        score: frame.score
      }
    });
    console.table(finalScores);
    const totalScore = finalScores.reduce((total, frame) => total + frame.score, 0)
    console.log(`Total score is: ${totalScore}`);
  }
}

const bowling = new Bowling;
bowling.run();

export default Bowling;