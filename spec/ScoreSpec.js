describe('Score', function(){
  var score;

  beforeEach(function(){
    score = new Score("strike", [5,2]);
  });

  it('Is initialized with a multiplier', function(){
    expect(score.multiplier).toEqual("strike");
  });

  it('Is initialized with a currentPins array', function(){
    expect(score.currentPins).toEqual([5,2]);
  });

  describe('#calculateFrameScore', function(){
    it('calculates the correct score when a strike was scored in the previous frame', function(){
      score = new Score("strike", [5,2]);
      expect(score.multiplier).toEqual("strike");
      expect(score.calculateFrameScore()).toEqual(14);
    });

    it('calculates the correct score when a spare was scored in the previous frame', function(){
      score = new Score("spare", [5,2]);
      expect(score.calculateFrameScore()).toEqual(12);
    });

    it('calculates the correct score when neither a strike nor a spare was score in previoius frame', function(){
      score = new Score("none", [5,2]);
      expect(score.calculateFrameScore()).toEqual(7);
    });
  });

  describe('#calculateTenthFrameScore', function(){
    it('Calculates the correct score after a strike was bowled in frame 9', function(){
      score = new Score("strike", [5,2,10]);
      expect(score.calculateTenthFrameScore()).toEqual(24);
    });
    it('Calculates the correct score after a spare was bowled in frame 9', function(){
      score = new Score("spare", [5,2,10]);
      expect(score.calculateTenthFrameScore()).toEqual(22);
    });
    it('Calculates the correct score after neither a strike nor a spare was bowled in frame 9', function(){
      score = new Score("none", [5,2,10]);
      expect(score.calculateTenthFrameScore()).toEqual(17);
    });
  });

});
