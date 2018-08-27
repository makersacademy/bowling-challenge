// describe('Bowling', function(){
//
//   var bowling
//
//   beforeEach(function(){
//     bowling = new Bowling();
//   });
//
//   describe("has a first roll", function(){
//     it('and shows the score for that roll', function(){
//       bowling.firstRoll(1);
//       expect(bowling.roll1).toEqual(1);
//     });
//
//     it('and shows a total score', function(){
//       bowling.firstRoll(4);
//       expect(bowling.total).toEqual(4);
//     });
//   });
//
//   describe("has a second roll", function(){
//     it('and shows the score for that roll', function(){
//       bowling.secondRoll(2);
//       expect(bowling.roll2).toEqual(2);
//     });
//
//     it('and shows the total score for the game so far', function(){
//       bowling.firstRoll(1);
//       bowling.secondRoll(2);
//       expect(bowling.total).toEqual(3);
//     });
//   });
//
//   describe("has a spare", function(){
//     it('and returns true if the player scores a 10 in their 2 rolls', function(){
//       bowling.firstRoll(1);
//       bowling.secondRoll(9);
//       expect(bowling.isSpare).toBe(true);
//     });
//     it('and gives a player a bonus for that round which is the roll from the next round', function(){
//       bowling.firstRoll(1);
//       bowling.secondRoll(9);
//       expect(bowling.isSpare).toBe(true);
//       bowling.firstRoll(4);
//       expect(bowling.spareBonus).toEqual(4);
//       expect(bowling.total).toEqual(18)
//       expect(bowling.isSpare).toEqual(false);
//     });
//   });
//   describe('has a strike', function(){
//     it('and returns true if the player scores a 10 in their first roll', function(){
//       bowling.firstRoll(10);
//       expect(bowling.isStrike).toBe(true);
//     });
//     it('and gives a player a bonus for that round which is the sum of the rolls from the next round', function(){
//       bowling.firstRoll(10);
//       expect(bowling.isStrike).toBe(true);
//       bowling.firstRoll(4);
//       expect(bowling.strikeBonus1).toEqual(4);
//       bowling.secondRoll(5);
//       expect(bowling.strikeBonus2).toEqual(5);
//       expect(bowling.total).toEqual(28);
//       expect(bowling.isStrike).toEqual(false);
//     });
//     it('calculates the total score for numerous strikes in a row', function(){
//       bowling.firstRoll(10);
//       bowling.firstRoll(10);
//       bowling.firstRoll(7);
//       bowling.secondRoll(2);
//       expect(bowling.total).toEqual(55);
//       //if roll1 = 10 and value = 10, total strike bonus = roll1 + value
//
//     });
//     it('calculates the total score for numerous strikes in a row', function(){
//       bowling.firstRoll(10);
//       bowling.firstRoll(10);
//       bowling.firstRoll(10);
//       bowling.firstRoll(10);
//       bowling.firstRoll(10);
//       bowling.firstRoll(7);
//       bowling.secondRoll(2);
//       expect(bowling.total).toEqual(145);
//     });
//
//   });
// });
