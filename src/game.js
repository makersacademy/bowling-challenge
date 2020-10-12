class Game {
    constructor() {
        this.rolls = [];
    }

    Game; roll = function (pins) {
        this.rolls.push(pins);
    };

    Game; score = function () {
        var result = 0
        var rollIndex = 0;

        for (var frameIndex = 0; frameIndex < 10; frameIndex++) {   //frameIndex go through 10 frame
            result += this.rolls[rollIndex] + this.rolls[rollIndex + 1]; // Gives two rolls in each frame
            rollIndex += 2;      //increments by 2
        }
        return result;
    };
}