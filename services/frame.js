class Frame {

    constructor(ball1, ball2) {
        this.maxPins = 10;
        this.pins = 0;
        this.ball1 = ball1;
        this.ball2 = ball2;
        // this.frameTotal = 0;
        // this.frame_array = [];
    }

    roll1(currentPins) {
        this.ball1 = currentPins;
        this.pins += currentPins;
    }

    roll2(currentPins) {
        if (this.pins + currentPins <= this.maxPins) {
            this.ball2 = currentPins;
            this.pins += currentPins;
        }
        else {
            throw 'Please recount pins knocked down (2nd ball only) and enter again';
        }
    };
}


module.exports = Frame;