describe("Setup Tests", function() {

  // let anything;

  //beforeEach()  {
  // anything = "something";
  // }

  it("runs first spec test",function()  {
    expect(true).toBe(true);
  });

});

describe("Feature Tests", function() {

  var scorecard;

  beforeEach(function()  {
    scorecard = new ScoreCard();
  });

  it("gutter game", function()  {
    for (let i = 0; i < 20; i++) {
      scorecard.roll(0);
    }
    expect(scorecard._ended).toBe(true);
    expect(scorecard._score).toBe(0);
  });

});

describe("Unit Tests", function()  {

  var scorecard;

  beforeEach (function() {
    scorecard = new ScoreCard();
  });

  it('score starts at 0', function() {
    expect(scorecard._score).toEqual(0)
  });

  it('new games are not ended', function() {
    expect(scorecard._ended).toBe(false)
  });


  it('new games have no rolls', function() {
    expect(scorecard._rolls.length).toBe(0);
  });
});
