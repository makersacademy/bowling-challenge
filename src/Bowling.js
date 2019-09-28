'use strict';

function Bowling() {
    this.tempStatus = true;
}

Bowling.prototype.test = function () {
    return this.tempStatus;
};