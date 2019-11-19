'use strict';

function BowlingGame(){
    this.MAXIMUM_PINS
    this._scoreSoFar = 0;
    this._frames = [];
    this.throws = 0;
    this.frameInPlay;
    this._totalScore = 0;
}

BowlingGame.prototype = {
    currentTurn: function(pinfall){
        let frame;
        this.throws += 1;
        if (this.throws === 1) { 
            this.saveFrame(new Frame());
            frame = this._frames[this._frames.length - 1];
            this.frameInPlay = this._frames.indexOf(frame);
            this._frames[this.frameInPlay].throwOne = pinfall;
            this._scoreSoFar += pinfall;
        } else {
            this._frames[this.frameInPlay].throwTwo = pinfall;
            this._scoreSoFar += pinfall;
            this.throws = 0;
        };

    },

    saveFrame: function(frame){
        this._frames.push(frame);
    },
    
    getScoreSoFar: function(){  
      return this._scoreSoFar;
    },

    getTotalScore: function(){
        for ( let i = 0 ; i < this._frames.length; i++){
            this._totalScore += this._frames[i].throwOne + this._frames[i].throwTwo;
        }
    },

    frameScore: function(){
        //ToDo: extract to Frame
        let frame = this._frames[this._frames.length - 1];
        frame._score = frame.throwOne + frame.throwTwo;
        if(frame.throwOne === this.MAXIMUM_PINS) { 
            frame._status = 'strike';
        }
        else if (frame._score === this.MAXIMUM_PINS) { 
            frame._status = 'spare';
        }
        else { 
            frame._status = 'normal'; 
        }  
    }
};

