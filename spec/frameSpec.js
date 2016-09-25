describe('Frame tests', function(){

  describe('calculates score', function(){
    it('single, zero, non-final frame score', function(){
      var frame = new Frame([0,0]);
      expect(frame.score()).toEqual(0);
    });
  });

});
