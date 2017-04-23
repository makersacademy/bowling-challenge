describe('Scorecard', function() {
  var scorecard;
  var frame;
  var score;

  beforeEach(function() {
    scorecard = new Scorecard();
    frame = jasmine.createSpyObj('frame', ['saveScore', 'scores', 'isComplete', 'hasBonus', 'totalScore'])
    score = jasmine.createSpy('score')
  });

  it('initializes with an empty array of scores', function() {
    expect(scorecard.scores).toEqual([]);
  });

  describe('evaluate', function() {
    it('saves the total score', function() {
      scorecard.evaluate(frame);
      expect(scorecard.scores.length).toEqual(1);
    });
    it('saves the bonus from the frame', function() {
      frame.hasBonus.and.returnValue('spare');
      scorecard.evaluate(frame);
      expect(scorecard.bonus).toEqual('spare');
    });
    it('calls addBonus', function() {
      spyOn(scorecard, 'addBonus')
      scorecard.evaluate(frame);
      expect(scorecard.addBonus).toHaveBeenCalledWith(frame);
    });
  });


  describe('addTotalScore', function() {
    it('adds the total score of the frame', function(){
      scorecard._addTotalScore(score);
      expect(scorecard.scores).toEqual([score]);
    });
  });


  describe('addBonus', function() {
    describe('spare scored', function(){
      it('adds bonus of next round', function() {
        scorecard.addScore(5);
        scorecard.addScore(5);
        scorecard.addScore(2);
        scorecard.addBonus();
        expect(scorecard.scores.pop()).toEqual(12);
      });
    });
    describe('strike scored', function() {
      it('adds bonus of next two rounds', function() {
        scorecard.addScore(10);
        scorecard.addScore(5);
        scorecard.addScore(2);
        scorecard.addBonus();
        expect(scorecard.scores.pop()).toEqual(17);
      });
    });
    describe('no bonus scored', function() {
      it('deos not add bonus if no spare or strike', function() {
        scorecard.addScore(5);
        scorecard.addScore(2);
        scorecard.addScore(5);
        scorecard.addBonus();
        expect(scorecard.scores.pop()).toEqual(7);
      });
    });
  });
});
