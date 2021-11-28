class Frame {

    constructor() {
        this.maxPins = 10;
        this.pins = 0;
        this.frameTotal = 0
        this.frame_array = [];
    }

    ball1(pins) {
        this.frame_array.push(pins);
    }
}


module.exports = Frame;