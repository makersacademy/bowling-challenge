'use strict';

describe('Frame', function() {

    var frame;

    var bowlMany = function(n, pins) {
        for (var i = 0; i < n; i++) {
            frame.turn(pins)
        }
    }

    var bowlSpare = function() {
        frame.turn(5);
        frame.turn(5);
    }

    var bowlStrike = function() {
        frame.turn(10);
    }

    beforeEach(function() {
        frame = new Frame();
    });

    describe('frame fundamentals', function() {

      it('allows two bowls per frame', function() {
          expect(frame._turnsRemaining).toBe(2);
      });

      it('has 10 pins', function() {
          expect(frame._PINS).toEqual(10);
      });

    });

    describe('frame mechanics', function() {

        it('allows the bowler to knock pins down', function() {
            frame.turn(10);
            expect(frame.score()).toEqual(10);
        });

        it('lowers the amount of remaining turns after taking a turn', function() {
            frame.turn(8);
            expect(frame._turnsRemaining).toEqual(1);
        });

        it('records the score after taking a turn', function() {
            frame.turn(8);
            expect(frame.firstScore()).toEqual(8);
        });

        it('records a ten on the first turn as a strike', function() {
            frame.turn(10);
            expect(frame.isStrike()).toBeTruthy();
        });

        it('ends the frame after getting a strike', function() {
            frame.turn(10);
            expect(frame.isFrameEnded()).toEqual(true);
        });

        it('records all pins knocked down over both turns as a spare', function() {
            frame.turn(8);
            frame.turn(2);
            expect(frame.isSpare()).toBeTruthy();
        });

    });

    describe('frame ending', function() {

        it('ends the frame when both turns have been taken', function() {
            frame.turn(8);
            frame.turn(1);
            expect(frame.isFrameEnded()).toEqual(true);
        });

    });

});
