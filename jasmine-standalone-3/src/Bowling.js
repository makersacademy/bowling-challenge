'use strict';

function BowlingGame(){
    this._currentScore = 0;
    this._totalScore = 0;
    this._frames = [];
    this.countRolls = 0;
    this._currentframe;
    this.lastIndex;
    this.count = 0;
    this._score;
    this.runScore = [];
    this.frameScore = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]};

}

BowlingGame.prototype = {
    getCurrentScore: function(){  
      return this._currentScore;
    },

    addFrame: function(frame){
        this._frames.push(frame);
    },

    currentMove: function(pins_down){
        let pins;
        this.countRolls += 1; 
            if (this.countRolls === 1) { 
                this.addFrame(new Frame());
                this.setLastIndex();
                this._frames[this.lastIndex].firstRoll = pins_down ;
                if(this.lastIndex < 10) {
                    this.frameScore[this.lastIndex+1].push(pins_down);
                }
                this.setCurrentScore(pins_down);
                if(pins_down === 10) { this.countRolls = 0; } 
            } else {
                if (pins_down + this._frames[this.lastIndex].firstRoll > 10 ) { throw new Error("only 10 pins per frame!"); }
                this._frames[this.lastIndex].secondRoll = pins_down;
                if(this.lastIndex < 10) {
                    this.frameScore[this.lastIndex+1].push(pins_down);
                    }
                this.countRolls = 0;
                this.setCurrentScore(pins_down);
        };
         if (this.lastIndex === 9) {
            this.checkForPerfectGame(pins);
         }
    },

    setCurrentScore: function(pins_down){
        this._currentScore += pins_down;
    },

    checkForPerfectGame: function(pins){
        if((this._currentframe.isStrike(this._currentframe)) || (this._currentScore === 10)){
             this.addExtraRoll(this.lastIndex, pins);
            }
    },

    addExtraRoll: function(index, pins){
        let frame = this._frames[index];
        let pins_down = pins;
        if (pins_down === 10 && this._frames[index].firstRoll === 10 && this.count === 0) {
            this.count = 1;
            this._frames[index].secondRoll = 10;
        }
        else {
            this._frames[index].extraRoll = pins_down; 
        }
    },

    setLastIndex: function(){
        let frame;
        frame = this._frames[this._frames.length - 1];
        this._currentframe = frame;
        this.lastIndex = this._frames.indexOf(frame);
    },

    frameRunningScore: function(){
        let frame = this._frames[this._frames.length - 1];
        frame._score = frame.firstRoll + frame.secondRoll;
        for(let i = 0; i < this._frames.length; i++){
            if(this.runScore[i]){
              this.runScore[i] = frame._score;
             }
          }
        if(frame.firstRoll === 10) { 
            frame._output = 'strike';
        }
        else if (frame._score === 10) { frame._output = 'spare';}
        else { frame._output = 'normal'; }
        return this._frames ; 
    },

    

    calculateScore: function(){
        let frames = this._frames;
        for ( let index = 0 ; index < this._frames.length; index++) {
            let frame = this._frames[index];
            let bonus = 0;
            frame._score = frame.firstRoll + frame.secondRoll;
            if(frames[index].firstRoll === 10 && index !== this._frames.length - 1) 
                {
                    bonus = this.strikeBonus(index);
                };

            if (frame._score === 10 && frame.firstRoll !== 10 && index != 9) 
                {
                    bonus = frames[index+1].firstRoll;
                }
            
            this._totalScore += this._frames[index].firstRoll + this._frames[index].secondRoll + this._frames[index].extraRoll + bonus;
            this.runScore.push(this._totalScore);
        }
    },

    strikeBonus: function(index){
        let bonus;
        let frames = this._frames;
        if (frames[index+1].firstRoll === 10){
            if (index === this._frames.length - 2 && frames[index+1].secondRoll === 10) { 
                bonus = 20 ;
            } else {
                if(index < this._frames.length - 2){
                    bonus = frames[index+2].firstRoll === 10 ? 20 : 10 + frames[index+2].firstRoll;  
                }
                else { bonus = 10;}
                }
        }
        else {
            bonus = frames[index+1].firstRoll +  frames[index+1].secondRoll;
        }
        return bonus;
    },
      
    isRollValid: function(pinsHit) {
        if (pinsHit > 10) {
          throw new Error("only 10 pins per frame!");
          return false;
        }else if(this._frames.length > 10){
          this.gameover = true;
          return false;
        }else{
          return true;
        }
      },
      
      gameOver: function (){
        if (this._frames.length > 10){
          return true;
        }
      }
};