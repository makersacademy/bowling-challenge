describe ("Frame", function() {

  var frame

  beforeEach(function(){
    frame = new Frame();
  });

  describe('bowl',function(){
    it('adds to the scores after a bowl', function() {
      frame.bowl(4);
      expect(frame.scores.length).toEqual(1);
    });

    it('reduce the nuber of pins by the score', function() {
      frame.bowl(4);
      expect(frame.pins).toEqual(6);
    })

    it('throws an error if score is too high', function() {
      expect( function(){ frame.bowl(11); } ).toThrow("please enter a valid score");
    });

    it('ends the turn after a stike', function() {
      frame.bowl(10);
      expect(frame.finish).toEqual(true);
    });

    it('ends the turn after two bowls', function() {
      frame.bowl(4);
      frame.bowl(4);
      expect(frame.finish).toEqual(true);
    });

    it('does not end the turn after one bowl', function() {
      frame.bowl(4);
      expect(frame.finish).toEqual(false);
    });

    it('throws an error if the turn is over', function() {
      frame.bowl(2);
      frame.bowl(2);
      expect( function(){ frame.bowl(4); } ).toThrow("frame has finished, start a new frame");
    });
  });
});
