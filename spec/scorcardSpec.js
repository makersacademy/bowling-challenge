
describe('Scorecard', function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  describe('frames', function(){
    
    it('records a score', function(){
      scorecard.recordFrame(1, 5, 6);
      expect(scorecard.gameScores).toEqual( [[1, 5 ,6]] );;
    });
    
    it('returns false on incomplete game', function(){
      scorecard.recordFrame(1, 5, 6);
      expect(scorecard.isComplete()).toBe(false);
    })
  });

  describe('gutter game', function(){

    it('gutter game total should be zero', function(){
      expect(scorecard.isComplete()).toBe(true);
    })
    
  });

});