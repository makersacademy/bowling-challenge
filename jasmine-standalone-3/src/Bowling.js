'use strict';

function BowlingGame(){
    this._currentScore = 0;
    //this._player = typeof player !== 'undefined' ? player : new Player();
   // this._frame = typeof frame !== 'undefined' ? frame : new Frame();
    this._totalScore = 0;
    this._frames = [];
    this.countRolls = 0;
    this._currentframe;
    this.lastIndex;
    this.count = 0;
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
        //if(this.isRollValid(pins_down)){
            if (this.countRolls === 1) { 
                this.addFrame(new Frame());
                this.setLastIndex();
                this._frames[this.lastIndex].firstRoll = pins_down ;
                this.setCurrentScore(pins_down);
                //this._currentScore += pins_down;
                if(pins_down === 10) { this.countRolls = 0; } 
            } else {
                if (pins_down + this._frames[this.lastIndex].firstRoll > 10 ) { throw new Error("only 10 pins per frame!"); }
                this._frames[this.lastIndex].secondRoll = pins_down;
                this.countRolls = 0;
                this.setCurrentScore(pins_down);
                //this._currentScore += pins_down;
        };
         if (this.lastIndex === 9) {
            //  if ((this._frames[this.lastIndex].firstRoll === 10) || (this._currentScore === 10)){
            //     this.addExtraRoll(this.lastIndex,pins);
            //  }
            this.checkForPerfectGame(pins);
            //if((this._currentframe.isStrike(this._currentframe)) || (this._currentScore === 10)){ this.addExtraRoll(this.lastIndex, pins);}
         }
       // }
    },

    setCurrentScore: function(pins_down){
        this._currentScore += pins_down;
    },

    checkForPerfectGame: function(pins){
        if((this._currentframe.isStrike(this._currentframe)) || (this._currentScore === 10)){
             this.addExtraRoll(this.lastIndex, pins);
            }
    },

    setLastIndex: function(){
        let frame;
        frame = this._frames[this._frames.length - 1];
        this._currentframe = frame;
        this.lastIndex = this._frames.indexOf(frame);
    },

    addExtraRoll: function(index, pins){
        let frame = this._frames[index];
        let pins_down = pins;
        if (pins_down === 10 && this._frames[index].firstRoll === 10 && this.count === 0) {
            this.count = 1;
            this._frames[index].secondRoll = 10;
            this.addExtraRoll(index, pins);
        }
        else {

            this._frames[index].extraRoll = pins_down; 
            // if (this.count === 1) { 
            //     this._frames[index].extraRoll = pins_down; 
            //  } else{
            // this._frames[index].secondRoll = pins_down;  
            //  }
        }
    },

    calculateScore: function(){
        //let bonus;
        let frames = this._frames;
        for ( let index = 0 ; index < this._frames.length; index++) {
            let frame = this._frames[index];
            let bonus = 0;
            //let frames = this._frames;
            frame._score = frame.firstRoll + frame.secondRoll;
            if(frames[index].firstRoll === 10 && index !== this._frames.length - 1) 
                {
                    bonus = this.strikeBonus(index);
                };

            if (frame._score === 10 && frame.firstRoll !== 10 && index != 9) 
                {
                    bonus = frames[index+1].firstRoll;
                    //this._totalScore = this._totalScore + frame._score + bonus;
                }
            
            this._totalScore += this._frames[index].firstRoll + this._frames[index].secondRoll + this._frames[index].extraRoll + bonus;
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
      
    // roll: function(){
    //     let frame = this._frames[this._frames.length - 1];
    //     this.lastIndex = this._frames.indexOf(frame);
    // }


    isRollValid: function(pinsHit) {
        // let frame = this._frames[this._frames.length - 1];
        // this.lastIndex = this._frames.indexOf(frame);
        //this.setLastIndex()
        if (pinsHit > 10) {
          throw new Error("only 10 pins per frame!");
          return false;
        }else if(this._frames.length > 10){
          this.gameover = true;
        //   throw new Error("Game Over");
          return false;
        }else{
            this.currentMove(pinsHit);
          //return true;
        }
      },
      
      gameOver: function (){
        if (this._frames.length > 10){
          return true;
        }
      }
      

};