'use strict';

function BowlingGame(){
    this._currentScore = 0;
    //this._player = typeof player !== 'undefined' ? player : new Player();
   // this._frame = typeof frame !== 'undefined' ? frame : new Frame();
    this._totalScore = 0;
    this._frames = [];
    this.countRolls = 0;
    this.lastIndex;
}

BowlingGame.prototype = {
    getCurrentScore: function(){  
      return this._currentScore;
    },

    addFrame: function(frame){
        this._frames.push(frame);
    },

    currentMove: function(pins_down){
        let frame;
        this.countRolls += 1;
        if (this.countRolls === 1) { 
            this.addFrame(new Frame());
            frame = this._frames[this._frames.length - 1];
            this.lastIndex = this._frames.indexOf(frame);
            this._frames[this.lastIndex].firstRoll = pins_down ;
            this._currentScore += pins_down;
        } else {
            this._frames[this.lastIndex].secondRoll = pins_down;
             this.countRolls = 0;
             this._currentScore += pins_down;
        };
        
    },

    calculateScore: function(){
        for ( let i = 0 ; i < this._frames.length; i++){
            // let frame_obj = this._frames[i];
            this._totalScore += this._frames[i].firstRoll + this._frames[i].secondRoll;
        }
    },

    // roll: function(){
    //     let frame = this._frames[this._frames.length - 1];
    //     this.lastIndex = this._frames.indexOf(frame);
    // }

    frameScore: function(){
        let frame = this._frames[this._frames.length - 1];
        frame._score = frame.firstRoll + frame.secondRoll;
        if(frame.firstRoll === 10) { frame._output = 'strike';}
        else if (frame._score === 10) { frame._output = 'spare';}
        else { frame._output = 'normal'; }  
    }

};