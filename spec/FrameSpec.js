describe ("Frame", function() {

  var frame

  beforeEach(function(){
    frame = new Frame();
  });

  describe('bowl',function(){
    it('adds to the scores after a bowl', function(){
      frame.bowl(4);
      expect(frame.scores.length).toEqual(1);
    });
  });
});
