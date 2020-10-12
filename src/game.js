class Game {
    constructor() {
        this.rolls = [];
    }

    Game; roll = function (pins) {
        this.rolls.push(pins);
    };

    Game; score = function () {
        var result = 0
        for (var i = 0; i < 20; i++) {
            result += this.rolls[i];
        }
        return result;
    };
}