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
    beforeEach(function(){
      score = new Score("strike", [5,2]);
    });
    it('calculates the correct score when a strike was scored in the previous frame', function(){
      expect(score.calculateFrameScore()).toEqual(14);
    });

    beforeEach(function(){
      score = new Score("spare", [5,2]);
    });
    it('calculates the correct score when a spare was scored in the previous frame', function(){
      expect(score.calculateFrameScore()).toEqual(12);
    });

    beforeEach(function(){
      score = new Score("none", [5,2]);
    });
    it('calculates the correct score when neither a strike nor a spare was score in previoius frame', function(){
      expect(score.calculateFrameScore()).toEqual(7);
    });

  });

});
