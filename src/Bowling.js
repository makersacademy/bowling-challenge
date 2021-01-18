class BowlingGame {

    constructor(){
        this.PIN_COUNT = 10
        this.FRAME_COUNT = 10
        this.frame = [];
        this.runningScore = [];
        this.frameIsComplete = false
        this.frameNumber = 1
        this.gameOver = false
    };

    roll(pins) {
        if (this.frameIsComplete === false){
            console.log(this.frameNumber)
            this.frame.push(pins);
            this.frameComplete();
        } else {
            this.nextFrame()
        };
    };

    frameComplete() {
        if(this.frame.length === 2){
            this.frameIsComplete = true;
            this.nextFrame();
        } else if (this.frame[0] === this.PIN_COUNT){
            this.frame.push(0);
            this.frameIsComplete = true;
            this.nextFrame();
        } else {
            false
        };
    };

    nextFrame(){
        this.runningScore.push(this.frame);
        this.frame = [];
        this.frameNumber += 1;
        this.frameIsComplete = false;
        this.gameComplete();
    };

    gameComplete(){
        if(this.frameNumber === 11){
            console.log("Game Over");
            console.log(this.totalScore());
            this.gameOver = true;
        };
    };

    totalScore(){
        let total = 0
        this.runningScore.forEach(element => total += (element.reduce((a, b) => a + b)));
        return total;
    };


};