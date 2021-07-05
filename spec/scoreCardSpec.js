describe('ScoreCard', ()=> {

  let scoreCard;

  beforeEach(() => {
    scoreCard = new ScoreCard;
  })

  it("initializes a total score", () => {
    expect(scoreCard.totalScore).toEqual(0)
  });

  it("adds a score to the total score", () => {
    scoreCard.score(3);
    expect(scoreCard.totalScore).toEqual(3)
  });

  it("adds multiple scores to total score", () => {
    scoreCard.score(3);
    scoreCard.score(6);
    expect(scoreCard.totalScore).toEqual(9)
  });

  it("I can't score more then 10 points per bowl", () => {
    expect( () => {scoreCard.score(11)} ).toThrowError("Invalid Score")
  });

});