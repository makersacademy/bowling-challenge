// file: UserInterface.ts
import { BowlingScore } from "./BowlingScore";
// prompts lib to handle inputs https://yarnpkg.com/package/prompts
import prompts from 'prompts';

export class UserInterface{

  frame:number;
  constructor(){
    this.frame = 1;
  }

  async run(){

    const game = new BowlingScore();
    
    while(game.getFrameArray().length<10)
    {
      let ball = 1;
      let scores = [];
      scores.push((await this.takeScore(ball)).value);
      if(game.getFrameArray().length==9){
        ball += 1;
        scores.push((await this.takeScore(ball)).value);
        if(scores[0]+scores[1] >= 10){
          ball += 1;
          scores.push((await this.takeScore(ball)).value);
        }
      } 
      else{
        if(scores[0] != 10){
          ball += 1;
          scores.push((await this.takeScore(ball)).value);
        }
      }
      game.addFrame(scores[0],scores[1],scores[2]);
      this.frame += 1;
    }
    console.log(game.getRunningTotal());
  }


  async takeScore(ball:number){
    let context:string;
    switch (ball) {
      case 2:
        context = 'second';
        break;
    
      case 3:
        context = 'third';
        break;
    
      default:
        context = 'first'
        break;
    }

    const response = await prompts({
        type: 'number',
        name: 'value',
        message: `Frame ${this.frame} How many pins did you knock down on your ${context} ball?`,
        initial: 0,
        style: 'default',
        min: 0,
        max: 10
    });

    return response;
  }
}

// manual tests
 const ui = new UserInterface();
 ui.run();