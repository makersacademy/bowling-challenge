class bowlingPin {
    constructor() {
        this.rolls = { 'rollOne' : 0,
                       'rollTwo' : 0 }
    }

    roll() {
        for (let i = 1; i <= 2; i++) {
            let randomNum = Math.floor(Math.random() * 10) + 1;
            if (i == 1) {
                this.rolls['rollOne'] = randomNum
            } else {
                this.rolls['rollTwo'] = randomNum
            }
        }
        return this.rolls
    }
}


module.exports.bowlingPin = bowlingPin;


