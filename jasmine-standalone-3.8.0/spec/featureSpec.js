'use strict';

describe('Scorecard', function () {
  let scorecard;
 
  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it('plays a game of bowling', function () {

    scorecard.firstRoll(5);
    scorecard.secondRoll(4);

    scorecard.firstRoll(5);
    scorecard.secondRoll(4);

    scorecard.firstRoll(5);
    scorecard.secondRoll(4);

    scorecard.firstRoll(5);
    scorecard.secondRoll(4);

    scorecard.firstRoll(5);
    scorecard.secondRoll(4);

    scorecard.firstRoll(5);
    scorecard.secondRoll(4);

    scorecard.firstRoll(5);
    scorecard.secondRoll(4);

    scorecard.firstRoll(5);
    scorecard.secondRoll(4);

    scorecard.firstRoll(5);
    scorecard.secondRoll(4);

    scorecard.firstRoll(5);
    scorecard.secondRoll(4);

    expect(scorecard.score).toBe(90);
    expect(scorecard.frame.currentFrame).toBe(11);
    expect(scorecard.endOfRolls()).toEqual('Game over, your score was 90, well done!');
  });
});