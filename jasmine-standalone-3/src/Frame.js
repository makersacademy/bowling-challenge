function Frame(){
    this._id = 0;
    this.firstRoll = 0;
    this.secondRoll = 0;
    this._pins = 10;
    this._total = 0;
    this._score;
    this._output;
    this.extraRoll =0;
}

Frame.prototype = {
    isStrike: function(frame){
        if(frame.firstRoll === 10) { return true; }
    },

    isSpare: function(frame){
        if(frame._score === 10) { return true; }
    },
}


