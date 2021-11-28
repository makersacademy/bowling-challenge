class Frame {

    constructor() {
        this.pins = 0;
        this.ball1 = 0;
        this.ball2 = 0;
        // this.frameTotal = 0;
        // this.frame_array = [];
    }

    roll1(currentPins) {
        this.ball1 = currentPins;
        this.pins += currentPins;

    }

    roll2(currentPins) {
        if (this.pins + currentPins <= 10) {
            this.ball2 = currentPins;
            this.pins += currentPins;
        }
        else {
            throw 'Please recount pins knocked down (2nd ball only) and enter again';
        }
    };
}


module.exports = Frame;