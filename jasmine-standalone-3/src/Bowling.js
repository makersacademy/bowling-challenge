'use strict';

function BowlingGame(){
    this._currentScore = 0;
    //this._player = typeof player !== 'undefined' ? player : new Player();
   // this._frame = typeof frame !== 'undefined' ? frame : new Frame();
    this._totalScore = 0;
    this._frames = [];
    this.countRolls = 0;
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
        let frame;
        let pins;
        this.countRolls += 1;
        if (this.countRolls === 1) { 
            this.addFrame(new Frame());
            frame = this._frames[this._frames.length - 1];
            this.lastIndex = this._frames.indexOf(frame);
            this._frames[this.lastIndex].firstRoll = pins_down ;
            this._currentScore += pins_down;
            if(pins_down === 10) { this.countRolls = 0; } 
        } else {
            this._frames[this.lastIndex].secondRoll = pins_down;
             this.countRolls = 0;
             this._currentScore += pins_down;
        };
         if (this.lastIndex === 9) {
             if ((this._frames[this.lastIndex].firstRoll === 10) || (this._currentScore === 10)){
                this.addExtraRoll(this.lastIndex,pins);
             }
         }
        
    },

    addExtraRoll: function(index, pins){
        console.log('Extra roll added');
        let frame = this._frames[index];
        console.log(this.count)
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
                };

            if (frame._score === 10 && frame.firstRoll !== 10 && index != 9) 
                {
                    bonus = frames[index+1].firstRoll;
                    //this._totalScore = this._totalScore + frame._score + bonus;
                }
            
            this._totalScore += this._frames[index].firstRoll + this._frames[index].secondRoll + this._frames[index].extraRoll + bonus;
        
        }
    },

    
      
    // roll: function(){
    //     let frame = this._frames[this._frames.length - 1];
    //     this.lastIndex = this._frames.indexOf(frame);
    // }

    frameScore: function(){
        //let frame = this._frames[this._frames.length - 1];
        let frame = this._frames[this.lastIndex];
        frame._score = frame.firstRoll + frame.secondRoll;
        if(frame.firstRoll === 10) { 
            frame._output = 'strike';
        }
        else if (frame._score === 10) { frame._output = 'spare';}
        else { frame._output = 'normal'; }  
    }

};