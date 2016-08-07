describe('Scorecard', function(){
  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard;
  })

  var addScore = function(score, frameTries){
    for (var i = 0; i < frameTries; i++){
      scorecard.addScore(score);
    }
  }

  describe('initial state', function(){
    it('frame starts at 1', function(){
      expect(scorecard.currentFrame).toEqual(1);
    })

    it('score starts at 0', function(){
      expect(scorecard.score[scorecard.currentFrame]).toEqual(0);
    })
  })

  describe('scoring', function(){
    it('increases score of current frame', function(){
      addScore(5,1);
      expect(scorecard.score[scorecard.currentFrame]).toEqual(5);
    })

    it('calculates score of multiple frames', function(){
      addScore(4,5);
      expect(scorecard.score[1]).toEqual(8);
      expect(scorecard.score[2]).toEqual(8);
      expect(scorecard.score[3]).toEqual(4);
    })
  })

  describe('frameTries', function(){
    it('frametries increases after first try', function(){
      addScore(5,1);
      expect(scorecard.frameTries).toEqual(2);
    })

    it('currentFrame does not change after 1 frame try', function(){
      addScore(5,1);
      expect(scorecard.currentFrame).toEqual(1);
    })

    it('changes frame after two tries', function(){
      addScore(4,2);
      expect(scorecard.currentFrame).toEqual(2);
    })
  })

  describe('bonus points', function(){
    it('adds correct bonus points for a spare', function(){
      addScore(5,3); //bowl three 5's in a row
      expect(scorecard.score[1]).toEqual(15);
    })
  })
})
