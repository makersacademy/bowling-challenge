'use strict';

describe('Bowling Feature', function() {
   var bowling; 
   
   beforeEach(function() {
      bowling = new Bowling();
   });
   
   it('Counts the point for the first shot', function() {
      bowling.fakeShoot(5);
      expect(bowling.firstShot).toBe(5);
   });
   
   it('Moves to the next frame if the shot is a strike', function() {
      bowling.fakeShoot(10);
      expect(bowling.partialScore).toBe(10);
      expect(bowling.frame).toBe(1.5);
   });
   
   it('Adds the bonus after a spare', function() {
     bowling.fakeShoot(3);
     bowling.fakeShoot(7);
     bowling.fakeShoot(5);
     expect(bowling.getScore()).toBe(20);
   });
   
   it('Adds the bonus (two rolls) after a strike', function() {
     bowling.fakeShoot(10);
     bowling.fakeShoot(3);
     bowling.fakeShoot(5);
     expect(bowling.getScore()).toBe(26);
   });
   
   it('Adds the correct bonus after a spare and a strike', function() {
     bowling.fakeShoot(3);
     bowling.fakeShoot(7);
     bowling.fakeShoot(10);
     bowling.fakeShoot(1);
     expect(bowling.getScore()).toBe(32);
   });
   
   it('Adds the bonus for a spare on the last frame', function() {
     for (var i = 0; i < 18; i++) {
       bowling.fakeShoot(0)   
     };
     bowling.fakeShoot(5);
     bowling.fakeShoot(5);
     bowling.fakeShoot(10);
     expect(bowling.frame).toBe(11)
     expect(bowling.getScore()).toBe(20)
   });
   
   xit('Adds the bonus for two strikes on the last frame', function() {
     for (var i = 0; i < 18; i++) {
       bowling.fakeShoot(0)   
     };
     
     bowling.fakeShoot(10);
     console.log(bowling.strike)
     console.log(bowling.bonus)
     console.log(bowling.firstShot)
     console.log(bowling.secondShot)
     console.log(bowling.frame)
     console.log("-----------------")
     bowling.fakeShoot(10);
     console.log(bowling.strike)
     console.log(bowling.bonus)
     console.log(bowling.firstShot)
     console.log(bowling.secondShot)
     console.log(bowling.frame)
     bowling.fakeShoot(10);
     expect(bowling.frame).toBe(11)
     expect(bowling.getScore()).toBe(30)
   });
   
});