$(document).ready(function() {
    bowling = new game();
})


function game(){
    var frames, rolls, total, currentFrame, score, frame;

    this.frames = { };
    this.rolls = 0;
    this.total = 0;
    this.currentFrame = 1;
    this.score = 0;
    this.frame = [];
}

bowling = new game();

function addRoll(input) {
    var frameFirst, frameSecond, frameNumber, frame;

    frameFirst = "score-frame";
    frameSecond = "rolls-frame";

    bowling.addFrames(input);

    if (input == 10) {
        frame = frameFirst.concat(bowling.currentFrame);
        secondRoll("X", frame);
        bowling.rolls--;
        addToFrames(10);
    } else if (bowling.rolls == 1) {
        frame = frameFirst.concat(bowling.currentFrame);
        bowling.rolls--;
        secondRoll(input, frame);
    } else {
        frame = frameSecond.concat(bowling.currentFrame);
        bowling.rolls++;
        firstRoll(input, frame);
    }
}

function nextFrame(){
    bowling.currentFrame++;
}

function addToFrames(number) {
    frame = bowling.currentFrame;
    bowling.frames[frame] = number;
}


game.prototype.addFrames = function(frame){
    if (_isNotValidFrame(frame)){   
        systemMessage('Error: Frame has incorrect values');
    } else if(_isLastFrame(this.frame)) {
        systemMessage('Error: Game over');
    } else {
        this.frame.push(frame);
    }
    this.setTotal(frame);
};

game.prototype.lastFrame = function(){
    // WIP
};

game.prototype.setTotal = function(frame){
    // if (this.state === 'strike'){
    //     this.score = this.score + frame.reduce(getSum);
    // }else if (this.state === 'spare'){
    //     this.score = this.score + frame[0];
    // }
    // this.score = this.score + frame.reduce(getSum);
    
};

game.prototype.setState = function(values){
    if (_isEqualToTen(values)){
        this.state = _checkSpareOrStrike(values);
    } else {
        this.state = 'normal';
    }
};

function getSum(total, num) {
  return total + num;
}

function _isNotValidFrame(frame){
    if (frame.reduce(getSum) > 10) { return true; }
}

function _isLastFrame(frame){
    if (frame.length >= 10){ return true; }
}

function _isEqualToTen(frame){
    return (frame.reduce(getSum) === 10) ? true : false;
}

function _checkSpareOrStrike(values) {
    return values.length === 2 ? 'spare' : 'strike';
}
