'use strict';
class ScoreBoard {
    constructor() {
        this.rolls = ([])
    }
    roll(pins) {
        this.rolls.push(pins);
    }
    score() {
        var sum = 0;
        var rollsIndex = 0;
        for(var frameIndex=0; frameIndex<10; frameIndex++) {
            if (this.rolls[rollsIndex] == 10) {
                sum += 10 + this.rolls[rollsIndex + 1] + this.rolls[rollsIndex + 2]
                rollsIndex += 1
            }
            else if((this.rolls[rollsIndex] + this.rolls[rollsIndex + 1]) == 10) {
                sum += 10 + this.rolls[rollsIndex + 2]
                rollsIndex += 2
            }
            else{
            sum += this.rolls[rollsIndex] + this.rolls[rollsIndex + 1]
            rollsIndex += 2
            }
        }
        return sum
    }
}    