'use strict';

function Score() {
    
}

Score.prototype.calculateScore = function(frames) {
    return (10 - frames[0].pinsStanding());
};
