
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

    it('returns true on complete game', function(){
      for(var i = 1; i < 11; i++){
        scorecard.recordFrame(i, 0, 1)
      }
      expect(scorecard.isComplete()).toBe(true);
    })

    it('wont record more than 10 frames', function(){
      for(var i = 1; i < 12; i++){
        scorecard.recordFrame(i, 0, 1)
      }
      expect(scorecard.gameScores.length).toBe(10);
    })

  });

  describe('calculating total of frames', function(){
    
    it('one frame total', function(){
      scorecard.recordFrame(1, 5, 5);
      expect(scorecard.total()).toBe(10);
    })

    it('complete game with 1 point per frame total to be 10', function(){
      for(var i = 1; i < 11; i++){
        scorecard.recordFrame(i, 0, 1)
      }
      expect(scorecard.total()).toBe(10);
    })
  });

  describe('gutter game', function(){
    
    it('gutter game total should be zero', function(){
      for(var i = 1; i < 11; i++){
        scorecard.recordFrame(i, 0, 0)
      }
      expect(scorecard.isComplete()).toBe(true);
      expect(scorecard.total()).toBe(0);
    })

  });

  describe('new game', function(){

    it('clear game function empties frames', function(){
      for(var i = 1; i < 11; i++){
        scorecard.recordFrame(i, 0, 0)
      }
      scorecard.clearGame();
      expect(scorecard.gameScores.length).toBe(0);
    })
  })

});