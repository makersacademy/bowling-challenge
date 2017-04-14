'use strict';

function Frame(){}

Frame.prototype.roll = function () {
    return Math.floor(Math.random() * 11) + 0;
};
