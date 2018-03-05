'use strict';

function Bowling() {
    this.score = 0;
    this.frame = 0;
    this.spin = 0;
    this.power = 0;
    this.points = [];
    this.strikeSpare = [];
    this.counter = 0;
}

Bowling.prototype = {

    score: function() {
        return this.score;
    },

    determineScore: function() {
        if (this.roll = 10)
            this.points[counter].push(10);
            this.counter += 1;
        else (this.roll = 20);
            this.points[counter].push(20);
            this.counter += 1;

    },

    frame: function() {
        return this.frame
    },

    calculateFrame: function() {

        whenever index of array = 10
        or
        indexes of array 1 and 2 != 1
        this.frame += 1
    }

    roll: function(){

        if (this.spin >= 7 && this.power >= 7)
            return 6;
        else if (this.spin < 6 && this.power < 6)
            return 20;
        else if ((this.spin = 5) && (this.power = 8));
            return "strike";
        else if ((this.spin = 4) && (this.power = 7));
        return "strike";
    },

    spin: function() {
        return this.spin
    },

    power: function() {
        return this.power
    }

};