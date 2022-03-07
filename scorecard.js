const Frame = require("./frame");

class Scorecard{

    constructor(){
      this.frame = new Frame();
      this.frames = [];
      this.runningTotal = 0;
      this.strikes = [];
      this.frameCount = 0;
      this.endGame = false;
      this.bonus = false;
      this.spareCount = 0;
      this.bonusRoll = 0;
    }

    roll(pins){
      if (this.endGame){ 
        return;
      };

      if (!this.bonus){ 
        this.frame.roll(pins);
        if (this.frame.complete()){
            this.frames.push(this.frame.frame);
            this.frameCount += 1; 
            this.tallyScore();
            if (this.frameCount < 11){
              console.log(`Your Score for frame : ${this.frameCount} is ${this.runningTotal}`);
              console.log(this.frames);
            }
            if (this.frameCount < 10){
                this.frame = new Frame();
            } 
           if (this.frameCount === 10){  
            if (this.frame.standard()){
                this.endGame = true; 
            }else if (this.frame.strike()){
                this.bonusRoll = 2;
             }else{
                this.bonusRoll = 1;
            }
             this.bonus = true;
            }
        }
      }else{
    //   bounus game 
        this.bonusTime(pins);
        if ( this.bonusRoll == 0){
           this.endGame = true; 
        }
      }
      if (this.endGame){ 
          this.gameOver();
      };
    };

    tallyScore(){
        let currentFrame = this.frameCount-1;
        let currentFrameSum  = this.frame.sumFrame();
        this.runningTotal += currentFrameSum;
        this.frames[currentFrame][2] = this.runningTotal;

        if (this.spareCount === 1){
            let  first  = this.frames[currentFrame][0];
            this.runningTotal +=  first;
            this.frames[currentFrame][2] = this.runningTotal;
            this.frames[currentFrame - 1][2] += first;
            this.spareCount = 0;
        }

        if (this.frame.spare() === true){ 
            this.spareCount += 1;
        }

        if (this.frame.strike() === true){
            this.strikes.push('X');
            this.frames[currentFrame][1] = 0;
            this.frames[currentFrame][2] = this.runningTotal;
    
        }
       if (this.strikes.length >0){
          this.tallyPrevStrikes(currentFrame, currentFrameSum);
       }
    };

    tallyPrevStrikes(currentFrame, currentFrameSum){
      if (this.strikes.length == 2){
        if(this.frame.strike() === true){
            this.frames[currentFrame - 1][1] = 0;
            this.frames[currentFrame - 1][2] = this.runningTotal;
            this.runningTotal += 10;
            this.frames[currentFrame][1] = 0;
            this.frames[currentFrame][2] = this.runningTotal;
              
        }else{
            if (this.strikes.length == 2){
              let  first  = this.frames[currentFrame][0]; 
              this.runningTotal += first;
              this.frames[currentFrame - 2][2] += first;
              this.frames[currentFrame - 1][2] += (first + currentFrameSum);
              this.runningTotal += currentFrameSum;
              this.frames[currentFrame][2] = this.runningTotal;
              this.strikes.shift(); 
              return;
            }
        }

      }
      if (this.strikes.length == 3){
        if(this.frame.strike() === true){
            this.frames[currentFrame - 2][1] = 0;
            this.frames[currentFrame - 2][2] += 10;
            this.runningTotal += 10;
            this.frames[currentFrame - 1][1] = 0;
            this.frames[currentFrame - 1][2] = this.runningTotal;
            this.runningTotal += 10;
            this.frames[currentFrame][1] = 0;
            this.frames[currentFrame][2] = this.runningTotal;
            this.strikes.shift(); 
        }
      }

      if (this.strikes.length == 1){
        if(this.frame.standard() === true){
            this.running_total += currentFrameSum;
            this.frames[currentFrame - 1][2] = this.running_total; 
            this.strikes = [];
        }
      }
    }

    bonusTime(pins){
      this.bonusRoll -= 1;
      this.runningTotal += pins;
      if (this.runningTotal === 290){
        this.runningTotal += 10;
       }
      this.frames[9][2] = this.runningTotal;
    };

    total() {
      return this.runningTotal 
    };

    gameOver() {
        console.log(`The Game has Ended! Your END OF GAME SCORE IS ${this.runningTotal}`); 
        if (this.frame.spare() || this.frame.strike()){
          console.log(this.frames);
      }
    };
};


 module.exports = Scorecard;