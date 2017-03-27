function Frame(){
    this.total = [];
    this.PINS = 10;
    this.array = [];
    game = new Game();
};

Frame.prototype.roll = function(){
    // return hit = 10;
    return hit = Math.floor((Math.random() * (this.PINS + 1)));
};

Frame.prototype.pinsRemaining = function(){
    console.log("This roll: "+this.rollResult())
    console.log("Grand Total: "+game.grandTotal())
    return this.PINS -= hit;
};

Frame.prototype.rollResult = function(){
    return hit;
};

Frame.prototype.calculate = function(hits){
    this.total.push(hits);
    this.total.reduce(function(a, b){
      return c = a + b;
    }, 0);

    (c == 10) ? this.checkWhichRoll() : 0;

    if (this.total.length > 1 || c == 10){
        game.eachFrameScore.push(c)
    }
    return c;
};

Frame.prototype.frameTotal = function(){
    return c;
};

Frame.prototype.checkWhichRoll = function(){
    return $.fn.rollNumber() == 2 ? this.strike() : this.spare()
};

Frame.prototype.strike = function(){
    $.fn.endFrame();
    this.array.push(game.rollCount);
    console.log("rollCount array: "+this.array)
    console.log("STRIKE! Next frame doubled!")
    this.applyPoints('strike');
};

Frame.prototype.spare = function(){
    console.log("SPARE! Next roll doubled!")
    this.applyPoints('spare');
};

Frame.prototype.applyPoints = function(strikeOrSpare){
    if (strikeOrSpare == 'strike'){
        console.log('STRIKE!')
    }

    else if (strikeOrSpare == 'spare'){
        console.log('SPARE!')
    }
};
