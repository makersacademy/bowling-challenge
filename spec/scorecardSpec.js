describe('Scorecard', function(){
  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard;
  })

  describe('initial state', function(){
    it('frame starts at 1', function(){
      expect(scorecard.currentFrame).toEqual(1);
    })

    it('score starts at 0', function(){
      expect(scorecard.frameScore[scorecard.currentFrame]).toEqual(0);
    })
  })
})
