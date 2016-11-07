'use strict';
describe('Frame', function () {
    var frame;

    beforeEach(function () {
      frame = new Frame();
    });

     it('begins each frame with a score of zero', function () {
       expect(frame.pinsDown1).toBe(0);
     });

     it('is able to return a score out of 10 on the first roll', function() {
       frame.roll1();
       expect(frame.pinsDown1).toBeGreaterThan(0);
       expect(frame.pinsDown1).toBeLessThan(11);
     });

      it('is able to asign the remaining pins to roll2', function () {
        // spyOn(frame, 'score1').and.returnValue(4);
        frame.roll1();
        frame.pinsLeft();
        console.log(frame.pinsLeft())
        expect(frame.totalPins).toBeLessThan(10);
      });

      it('is able to calculate a total score at the end of roll2', function () {
        frame.roll1();
        frame.pinsLeft();
        frame.roll2();
        expect(frame.totalPins).toBeGreaterThan(-1);
      });

      it("allows you to know which frame you are on", function () {
        frame.firstRoll();
        frame.secondRoll();
        frame.nextFrame();
        expect(frame.currentFrame).toBe(1);
      });

      it("allows you to reset totalPins to 10 for the following frame", function () {
        frame.roll1();
        frame.roll2();
        frame.pinsLeft();
        frame.nextFrame();
        frame.reset();
        expect(frame.totalPins).toBe(10);
      });

      it("has an accumalative score", function () {
        frame.roll1();
        frame.roll2();
        frame.pinsLeft();
        frame.nextFrame();
        frame.addScore();
        frame.reset();
        expect(frame.score).toBeGreaterThan(0);
      });

      it("tells you when the game is over", function() {
          for(var x = 0; x < 11; x++) {
          frame.nextFrame();
        }
        expect(frame.currentFrame).toBe(11);
      });

      // As a player,
      // I want to be able to note when I have a 'strike' (all in one on first go)
      // So that I can get a bonus score.

      it("tells you when you have a strike", function() {
          // frame.roll1();
          this.pinsDown1 = jasmine.createSpy(10);
          expect(this.pinsDown1).toBe("It's a strike");
      });

   });
