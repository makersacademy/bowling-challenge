class Frame {
    constructor (roll1, roll2) {
        this.roll1 =  roll1;
        this.roll2 =  roll2;
    };

    getSum() {
        return this.roll1 + this.roll2
    };
};

module.exports = Frame;