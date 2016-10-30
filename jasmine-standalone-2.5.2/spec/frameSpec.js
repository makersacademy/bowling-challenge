'use strict';
describe('Frame', function () {
    var frame;

    beforeEach(function () {
      frame = new Frame();
    });

     it('begins each frame with a score of zero', function () {
       expect(frame.score1).toBe(0);
     });

     it('is able to return a score out of 10 on the first roll', function() {
       frame.roll1();
       expect(frame.score1).toBeGreaterThan(0);
       expect(frame.score1).toBeLessThan(11);
     });

      it('is able to asign the remaining pins to roll2', function () {
        spyOn(frame, 'score1').and.returnValue(4);
        frame.roll1();
        frame.pinsLeft();
        expect(frame.totalPins).toBeLessThan(10);
      });
   });
