'use strict';

describe('Bowling Feature', function() {
   var bowling; 
   
   
   it('Counts the point for the first shot', function() {
      bowling = new Bowling();
      bowling.lastShot = 5;
      expect(bowling.count()).toBe("First Shot: 5 - Pins left: 5");
   });
});