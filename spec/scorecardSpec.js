describe('ScoreCard', function() {
  var scoreCard;

  beforeEach( function() {
    scoreCard = new ScoreCard();
  })

  it('Marks a frame as a spare', function() {
    scoreCard.mark(5);
    scoreCard.mark(5);
    expect(scoreCard.isSpare(1)).toBe(true);
  });

  it('Cannot mark a third ball if not the tenth frame', function() {
    scoreCard.mark(2);
    scoreCard.mark(3);
    scoreCard.mark(4);
    expect(scoreCard.totalForFrame()).not.toEqual(9);
  })

  it('Returns a score card with one entry', function() {
    scoreCard.mark(2);
    scoreCard.mark(3);
    expect(scoreCard.card()).toEqual([5, null]);
  });

  it('Returns a score card showing a previous total', function() {
    scoreCard.mark(2);
    scoreCard.mark(3);
    scoreCard.mark(4);
    expect(scoreCard.card()).toEqual([5, null]);
  });

  it('Creates a new frame when a strike occurs', function() {
    scoreCard.mark(10);
    expect(scoreCard.card()).toEqual([null, null]);
  });

  it('marks a score of 30 for three strikes in a row', function() {
    scoreCard.mark(10);
    scoreCard.mark(10);
    scoreCard.mark(10);
    expect(scoreCard.card()).toEqual([30, null, null, null]);
  });

  it('Does not mark a spare as a strike', function() {
    scoreCard.mark(5);
    scoreCard.mark(5);
    expect(scoreCard.isStrike(1)).toBe(false);
  });

  it('Marks a frame as a strike', function() {
    scoreCard.mark(10);
    expect(scoreCard.isStrike(1)).toBe(true);
  });

  it('Does not mark a strike as a spare', function() {
    scoreCard.mark(10);
    expect(scoreCard.isSpare(1)).toBe(false);
  });
});
