class bowlingPin {
    constructor() {
        this.rolls = { 'rollOne' : 0,
                       'rollTwo' : 0 }
    }
    // changing the logic here, I will do a random first, and then i will do a random on the remaining items, example, if in the first rowll I got 7 points, 
    // the second random will be 10 - 7 == 3, so the second round I can only get the remaining pins
    roll() {
        let first_roll = Math.floor(Math.random() * 10) + 1;
        let pinsLeft = 10 - first_roll
        let second_roll = pinsLeft > 0 ? Math.floor(Math.random() * (pinsLeft + 1)) : 0; 
        this.rolls['rollOne'] = first_roll
        this.rolls['rollTwo'] = second_roll
        return this.rolls
    }
}


module.exports.bowlingPin = bowlingPin;



