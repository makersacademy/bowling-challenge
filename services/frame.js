const readline = require("readline-sync");

class Frame {

    constructor() {
        this.pins = 0;
        this.ball1 = 0;
        this.ball2 = 0;
        // this.frameTotal = 0;
        // this.frame_array = [];
    }

    roll1() {

        let currentPinsR1 = readline.question('How many pins did you knock down on roll 1? ');
        currentPinsR1 = parseInt(currentPinsR1);
        console.log(`You entered ${currentPinsR1}`);
        if (currentPinsR1 > 10) {
            console.log('Maximum pins is 10, please enter again');
            currentPinsR1 = readline.question('How many pins did you knock down on roll 1? ');
            currentPinsR1 = parseInt(currentPinsR1);
            console.log(`You entered ${currentPinsR1}`);
        }
        this.ball1 = currentPinsR1;
        this.pins += currentPinsR1;
        return this.ball1

    }

    roll2() {
        let currentPinsR2 = readline.question('How many pins did you knock down on roll 2? ');
            currentPinsR2 = parseInt(currentPinsR2);
            console.log(`You entered ${currentPinsR2}`);

        if (this.pins + currentPinsR2 > 10) {
            console.log('Please recount pins knocked down (2nd ball only) and enter again');
            currentPinsR2 = readline.question('How many pins did you knock down on roll 2? ');
            currentPinsR2 = parseInt(currentPinsR2);
            console.log(`You entered ${currentPinsR2}`);
        } else {
            //TODO: fix this code to work = currently it seems to run no matter what
            this.ball2 = currentPinsR2;
            return this.ball2
        }

    };
};
frame = new Frame;
frame.roll1();
frame.roll2();

module.exports = Frame;