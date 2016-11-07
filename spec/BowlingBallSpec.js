"use strict";

describe('BowlingBall', function() {
    var ball;

    beforeEach(function() {
        ball = new BowlingBall();
    });

    it('gives random num 0.5 sometimes', function() {
        spyOn(Math, 'random').and.returnValue(0.5);
        expect(ball.throw()).toBeTruthy();
    });


});