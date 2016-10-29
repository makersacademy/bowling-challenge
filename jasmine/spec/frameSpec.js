describe('Frame', function(){

  describe('Score options', function(){

    it('calculates a total for normal frame', function(){
      var frame = new Frame([1,1]);
      expect(frame.frameScore()).toEqual(2);
    })
    it('calculates total for a spare', function(){
      var frame = new Frame([9,1]);
      expect(frame._isSpare()).toEqual(true)
    })
    it('calculates total for a strike', function(){
      var frame = new Frame([10,0]);
      expect(frame._isStrike()).toEqual(true)
    })
    it('calcuates score in game', function(){
      var frame = new Frame([6,3]);
      var nextframe = new Frame([1,7]);
      expect(frame.totalScore(nextframe)).toEqual(9);
    })
  });

});
