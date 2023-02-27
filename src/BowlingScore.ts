// file: BowlingScore.ts
interface frame {
  first:number,
  second:number,
  third?:number,
  bonus:number,
  calculated:boolean
};

export class BowlingScore{
  private frameArray:Array<frame>;
  private total:number;
  constructor(){
    this.total = 0;
    this.frameArray = [];
  }

  getFrameArray(){
    return this.frameArray;
  }

  getRunningTotal(){
    return this.total;
  }

  addFrame(first:number,second:number = 0,third?:number){
    let frame = {
      first:first,
      second:second,
      bonus:0,
      third:third,
      calculated:false
    }
    this.frameArray.push(frame);
    this.calcScores();
  }

  private calcScores(){
    this.total = 0;
    this.frameArray.forEach((frame, index) => {
      if(!frame.calculated){
        if(index == 9){
          // this is the last frame
          if(this.isStrike(this.frameArray[8])){
            this.frameArray[8].bonus += frame.second;
            this.frameArray[8].calculated = true;
          }
          frame.bonus = this.calcFinalFrame(frame);
          frame.calculated = true;
        }
        else{
          // this is any other frame
          if(this.isStrike(frame) || this.isSpare(frame)){
            // only calc bonus when required
            frame.bonus = this.calcFrame(frame,index);
          }
          else{
            frame.calculated = true;
          }
        }
      }
      this.total += frame.first + frame.second + (frame.third||0) + frame.bonus;
    });
  } 

  private isStrike(frame:frame){
    return frame.first == 10;
  }

  private isSpare(frame:frame){
    return (frame.first + frame.second) == 10;
  }

  private calcFrame(frame:frame,frameIndex:number){
    let nextFrameIndex = frameIndex + 1;
    let nextNextFrameIndex = frameIndex + 2
    let bonus = 0;
    if(!(frameIndex == this.frameArray.length - 1)){
      let nextFrame = this.frameArray[nextFrameIndex]
      bonus = nextFrame.first;
      if(this.isStrike(frame)){
        if(this.isStrike(nextFrame)){
          if(nextNextFrameIndex < this.frameArray.length){
            let nextNextFrame = this.frameArray[nextNextFrameIndex]
            bonus += nextNextFrame.first;
            this.frameArray[frameIndex].calculated = true;
          }
        }
        else{
          this.frameArray[frameIndex].calculated = true;
          bonus += nextFrame.second;
        }
      }else if(this.isSpare(frame)){
        this.frameArray[frameIndex].calculated = true;
      } 
    }
    return bonus;
  }

  private calcFinalFrame(frame:frame){
    let bonus = 0;
    if(frame.first ==10){
      bonus+=frame.second;
    }
    return bonus;
  }
}

// const game = new BowlingScore();
// for (let i = 0;i<9; i++) {
//   game.addFrame(10); 
// }
// game.addFrame(10,10,10);
// console.log(game.getFrameArray());
// console.log(game.getRunningTotal());

