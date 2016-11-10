"use strict";

describe('BowlingGame', function() {

    var game;
    var frame;
    var ball;

    beforeEach(function() {
        game = new BowlingGame();
        frame1 = jasmine.createSpyObj('frame1', ['totPins']);
        frame2 = jasmine.createSpyObj('frame2', ['totPins']);
        ball = jasmine.createSpyObj('ball', ['throw']);
    });

});