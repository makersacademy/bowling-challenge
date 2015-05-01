var game;

var Bowling = function () {
    "use strict";
    this.game = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
};

Bowling.prototype.roll = function (roll) {
    "use strict";
    var firstEmptyFrame = this.game.indexOf('');
    this.game[firstEmptyFrame] = roll;

};

Bowling.prototype.total = function() {
    "use strict";
    var total = this.game.reduce(function(a, b) {
        return a + b;
    });

    return parseInt(total, 10);
};
