describe('Frame', function(){

  describe('Score options', function(){

    it('calculates a total for normal frame', function(){
      var frame = new Frame([1,1]);
      expect(frame.frameScore()).toEqual(2);
    })
    it('calcuates score in game', function(){
      var frame = new Frame([6,3]);
      var nextframe = new Frame([1,7]);
      expect(frame.totalScore(nextframe)).toEqual(9);
    })
    it('calculates total for a spare', function(){
      var frame = new Frame([9,1]);
      var nextframe = new Frame([3,4]);
      expect(frame._isSpare()).toEqual(true)
      expect(frame.totalScore(nextframe)).toEqual(13);
    })
    it('calculates total for a strike', function(){
      var frame = new Frame([10,0]);
      var nextframe = new Frame([2,7]);
      expect(frame._isStrike()).toEqual(true)
      expect(frame.totalScore(nextframe)).toEqual(19);
    })
    it('calculates total after 2 strikes', function(){
      var frame = new Frame([10,0]);
      var nextframe = new Frame([10,0]);
      var nextnextframe = new Frame([1,8])
      expect(frame.totalScore(nextframe, nextnextframe)).toEqual(29);
    })
    it('calculates total after 3 strikes', function(){
      var frame = new Frame([10,0]);
      var nextframe = new Frame([10,0]);
      var nextnextframe = new Frame([10,0]);
      expect(frame.totalScore(nextframe, nextnextframe)).toEqual(30);
    })
  });

});
