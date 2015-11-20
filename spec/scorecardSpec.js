describe('ScoreCard', function() {
  var scoreCard;

  beforeEach(function() {
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

  it('Creates a new frame when a spare occurs', function() {
    scoreCard.mark(5);
    scoreCard.mark(5);
    expect(scoreCard.card()).toEqual([null, null]);
  });

  describe('Perfect Game', function() {

    it('Creates a new frame when a strike occurs', function() {
      scoreCard.mark(10);
      expect(scoreCard.card()).toEqual([null, null]);
    });

    it('Creates a new frame when a second strike occurs', function() {
      scoreCard.mark(10);
      scoreCard.mark(10);
      expect(scoreCard.card()).toEqual([null, null, null]);
    });

    it('marks a score of 30 for three strikes in a row', function() {
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      expect(scoreCard.card()).toEqual([30, null, null, null]);
    });

    it('marks two scores for four strikes in a row', function() {
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      expect(scoreCard.card()).toEqual([30, 60, null, null, null]);
    });

    it('marks three scores for five strikes in a row', function() {
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      expect(scoreCard.card()).toEqual([30, 60, 90, null, null, null]);
    });

    it('marks seven scores for nine strikes in a row', function() {
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      expect(scoreCard.card()).toEqual([30, 60, 90, 120, 150, 180, 210, null, null, null]);
    });

    it('marks eight scores for ten strikes in a row', function() {
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      expect(scoreCard.card()).toEqual([30, 60, 90, 120, 150, 180, 210, 240, null, null]);
    });
    it('marks nine scores for eleven strikes in a row', function() {
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      expect(scoreCard.card()).toEqual([30, 60, 90, 120, 150, 180, 210, 240, 270, null]);
    });
    it('marks ten scores for twelve strikes in a row', function() {
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      scoreCard.mark(10);
      expect(scoreCard.card()).toEqual([30, 60, 90, 120, 150, 180, 210, 240, 270, 300]);
    });
  })
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
