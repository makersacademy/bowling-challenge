'use strict';

describe('Bowling Feature', function() {
   var bowling; 
   
   beforeEach(function() {
      bowling = new Bowling();
   });
   
   it('Counts the point for the first shot', function() {
      bowling.lastShot = 5;
      expect(bowling.count()).toBe("Shot: 5 - Pins left: 5");
   });
   
   it('Moves to the next frame if the shot is a strike', function() {
      bowling.fakeShoot(10);
      expect(bowling.partialScore).toBe(10);
   })
   
   
});