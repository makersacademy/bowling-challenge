describe('ScoreCard', function() {
  var scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard();
  })

  it('Returns a score card with one entry', function() {
    scoreCard.mark(2);
    scoreCard.mark(3);
    expect(scoreCard.card()).toEqual([5, null, null, null, null, null, null, null, null, null]);
  });

  it('Returns a score card showing a previous total', function() {
    scoreCard.mark(2);
    scoreCard.mark(3);
    scoreCard.mark(4);
    expect(scoreCard.card()).toEqual([5, null, null, null, null, null, null, null, null, null]);
  });

  describe('Perfect Game', function() {

    it('marks a score of 30 for three strikes in a row', function() {
      markMultiples(3, 10);
      expect(scoreCard.card()).toEqual([30, null, null, null, null, null, null, null, null, null]);
    });

    it('marks two scores for four strikes in a row', function() {
      markMultiples(4, 10);
      expect(scoreCard.card()).toEqual([30, 60, null, null, null, null, null, null, null, null]);
    });

    it('marks three scores for five strikes in a row', function() {
      markMultiples(5, 10);
      expect(scoreCard.card()).toEqual([30, 60, 90, null, null, null, null, null, null, null]);
    });

    it('marks seven scores for nine strikes in a row', function() {
      markMultiples(9, 10);
      expect(scoreCard.card()).toEqual([30, 60, 90, 120, 150, 180, 210, null, null, null]);
    });

    it('marks eight scores for ten strikes in a row', function() {
      markMultiples(10, 10);
      expect(scoreCard.card()).toEqual([30, 60, 90, 120, 150, 180, 210, 240, null, null]);
    });
    it('marks nine scores for eleven strikes in a row', function() {
      markMultiples(11, 10);
      expect(scoreCard.card()).toEqual([30, 60, 90, 120, 150, 180, 210, 240, 270, null]);
    });
    it('marks ten scores for twelve strikes in a row', function() {
      markMultiples(12, 10);
      expect(scoreCard.card()).toEqual([30, 60, 90, 120, 150, 180, 210, 240, 270, 300]);
    });
  });
  describe('Gutter Game', function() {
    it('can score a gutter game', function(){
      markMultiples(20, 0);
      expect(scoreCard.card()).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
  });
  describe('Spare Game', function() {
    it('can score a spare game', function(){
      markMultiples(21, 5);
      expect(scoreCard.card()).toEqual([15, 30, 45, 60, 75, 90, 105, 120, 135, 150]);
    });
  });
  describe('Arbitrary game', function() {
    it('can score a arbitrary game', function(){
      scoreCard.mark(10);
      scoreCard.mark(2);
      scoreCard.mark(3);
      scoreCard.mark(5);
      scoreCard.mark(4);
      scoreCard.mark(7);
      scoreCard.mark(1);
      scoreCard.mark(3);
      scoreCard.mark(2);
      scoreCard.mark(6);
      scoreCard.mark(4);
      scoreCard.mark(1);
      scoreCard.mark(2);
      scoreCard.mark(1);
      scoreCard.mark(2);
      scoreCard.mark(10);
      scoreCard.mark(1);
      scoreCard.mark(2);
      expect(scoreCard.card()).toEqual([15, 20, 29, 37, 42, 53, 56, 59, 72, 75]);
    });
  });

  var markMultiples = function(marks, pins) {
    for (var i = 0; i < marks; i++) {
      scoreCard.mark(pins);
    }
  }
});
