describe('Scorecard',function(){
  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
     for( var i = 0; i < 5; i++) {
      scorecard.list[i] = new BowlingFrame();
     };
  });

  describe('#updateList', function(){

    it('should set subframes current position and number after a non-strike shot', function() {
      scorecard.updateList(4);
      expect(scorecard.list[0].subFrame.one).toEqual(4);
      expect(scorecard.list[0].subFrame.current).toEqual('second');
    });

    it('should increase currentFrameIndex after 2 non-strike shots', function(){
      scorecard.updateList(4);
      scorecard.updateList(4);
      expect(scorecard.currentFrameIndex).toEqual(1);
    });

    it('should increase currentFrameIndex after 1 strike',function(){
      scorecard.updateList(10);
      expect(scorecard.currentFrameIndex).toEqual(1);
    });

    it('should reflect currentscore on a frame after two non-strike shots', function() {
      scorecard.updateList(4);
      scorecard.updateList(4);
      expect(scorecard.list[0].currentScore).toEqual(8);
    });

    it('should not reflect currentscore on a frame after a strike', function() {
      scorecard.updateList(10);
      expect(scorecard.list[0].currentScore).toEqual(0);
    });

  });
});