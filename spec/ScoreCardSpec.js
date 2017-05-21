describe('ScoreCard', function() {
  var scoreCard = new ScoreCard();

    it('has complete hash by default', function() {
      expect(scoreCard.f1b1).toBe('');
      expect(scoreCard.f1b2).toBe('');
      expect(scoreCard.f1tot).toBe('');
      expect(scoreCard.f2b2).toBe('');
      expect(scoreCard.f5b2).toBe('');
      expect(scoreCard.f7b1).toBe('');
      expect(scoreCard.f9tot).toBe('');
      expect(scoreCard.f10b3).toBe('');
      expect(scoreCard.total).toBe(0);
    })

    it('updates after first ball', function(){
      scoreCard.updateFrame(1, 1, 4);
      expect(scoreCard.f1b1).toBe(4);
    })

    it('updates after another random ball', function(){
      scoreCard.updateFrame(4, 2, 6);
      expect(scoreCard.f4b2).toBe(6);
    })

    it('displays gutters', function(){
      scoreCard.updateFrame(6, 1, 0);
      expect(scoreCard.f6b1).toBe('-');
    })

    it('displays strikes', function(){
      scoreCard.updateFrame(2, 1, 10);
      expect(scoreCard.f2b1).toBe('X');
    })

    it('displays spares', function(){
      scoreCard.updateFrame(3, 1, 4);
      scoreCard.updateFrame(3, 2, 6);
      expect(scoreCard.f3b2).toBe('/');
    })

    it('displays spare after gutter', function(){
      scoreCard.updateFrame(7, 1, 0);
      scoreCard.updateFrame(7, 2, 10);
      expect(scoreCard.f7b2).toBe('/');
    })


    it('displays first completed frame', function(){
      scoreCard.updateTotals([{frameNumber: 1, ballOne: 4, ballTwo: 3, bonusScore: 0}]);
      expect(scoreCard.f1tot).toBe(7);
    })

    it('displays second completed frame', function(){
      scoreCard.updateTotals([{frameNumber: 1, ballOne: 4, ballTwo: 3, bonusScore: 0}, {frameNumber: 2, ballOne: 3, ballTwo: 1, bonusScore: 0}]);
      expect(scoreCard.f2tot).toBe(11);
    })

    it('displays spares total', function(){
      scoreCard.updateTotals([{frameNumber: 1, ballOne: 4, ballTwo: 6, bonusScore: 3}, {frameNumber: 2, ballOne: 3, ballTwo: 0, bonusScore: 0}]);
      expect(scoreCard.f1tot).toBe(13);
      expect(scoreCard.f2tot).toBe(16);
    })

    it('displays strikes total', function(){
      scoreCard.updateTotals([{frameNumber: 1, ballOne: 10, ballTwo: 0, bonusScore: 17}, {frameNumber: 2, ballOne: 10, ballTwo: 0, bonusScore: 7}, {frameNumber: 3, ballOne: 7, ballTwo: 0, bonusScore: 0}]);
      expect(scoreCard.f1tot).toBe(27);
      expect(scoreCard.f2tot).toBe(44);
      expect(scoreCard.f3tot).toBe(51);
    })
})
