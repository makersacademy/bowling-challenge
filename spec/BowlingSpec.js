describe("Bowling Scorecard", function() {

  var scorecard = new Scorecard("Paul")

  it("should record a game of bowling", function() {
    scorecard.submit(5,5)
    expect(scorecard.score).toEqual(10);
    scorecard.submit(5,0)
    expect(scorecard.score).toEqual(20);
    scorecard.submit(10,0)
    expect(scorecard.score).toEqual(30);
    scorecard.submit(10,0)
    expect(scorecard.score).toEqual(50);
    scorecard.submit(5,5)
    expect(scorecard.score).toEqual(70);
    scorecard.submit(3,6)
    expect(scorecard.score).toEqual(82);
    scorecard.submit(0,0)
    expect(scorecard.score).toEqual(82);
    scorecard.submit(0,3)
    expect(scorecard.score).toEqual(85);
    scorecard.submit(0,3)
    expect(scorecard.score).toEqual(88);
    scorecard.submit(0,3)
    expect(scorecard.score).toEqual(91);
    expect(scorecard.gameStatus).toEqual('ended')

  });

});
