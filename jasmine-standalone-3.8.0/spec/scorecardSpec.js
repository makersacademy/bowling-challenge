'use strict';

describe('Scorecard', function () {
  let scorecard;
 
  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("adds points to the total after the first roll", function () {
    scorecard.firstRoll(5);
    expect(scorecard.score).toBe(5);
  });

  it("adds points to the total after the second roll", function () {
    scorecard.firstRoll(5);
    scorecard.secondRoll(4);
    expect(scorecard.score).toBe(9);
  });

  it("throws an error if the first roll is higher than 10", function () {
    expect( () => { scorecard.firstRoll(11); }).toThrow('Roll is higher than 10');
  });

  it("throws an error if the first roll if both rolls equal more than 10", function () {
    scorecard.firstRollScore = 6;
    expect(() => { scorecard.secondRoll(5); }).toThrow("Roll is higher than 10");
  });

  it('lets us know what the game has ended', function (){
    for (var i = 1; i <= 10; i++) {
      scorecard.frame.increment(i);
    }
    expect(scorecard.endOfRolls()).toEqual('Game over, your score was 0, well done!');
  });

});