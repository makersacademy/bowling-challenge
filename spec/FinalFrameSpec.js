describe ("FinalFrame", function() {

  var finalFrame

  beforeEach(function(){
    finalFrame = new FinalFrame();
  });

  describe('bowl',function(){
    it('adds to the scores after a bowl', function() {
      finalFrame.bowl(4);
      expect(finalFrame.scores.length).toEqual(1);
    });

    it('reduce the nuber of pins by the score', function() {
      finalFrame.bowl(4);
      expect(finalFrame.pins).toEqual(6);
    })

    it('throws an error if score is too high', function() {
      expect( function(){ finalFrame.bowl(11); } ).toThrow("please enter a valid score");
    });

    it('does not ends the turn after a stike', function() {
      finalFrame.bowl(10);
      expect(finalFrame.finish).toEqual(false);
    });

    it('does not end the turn after 2 strikes', function() {
      finalFrame.bowl(10);
      finalFrame.bowl(10);
      expect(finalFrame.finish).toEqual(false);
    })

    it('ends the turn after two bowls', function() {
      finalFrame.bowl(4);
      finalFrame.bowl(4);
      expect(finalFrame.finish).toEqual(true);
    });

    it('ends the turn after 3 turns', function() {
      finalFrame.bowl(10);
      finalFrame.bowl(10);
      finalFrame.bowl(4);
      expect(finalFrame.finish).toEqual(true);
    });

    it('does not end the turn after a spare', function() {
      finalFrame.bowl(5);
      finalFrame.bowl(5);
      expect(finalFrame.finish).toEqual(false);
    });

    it('ends the turn after a spare and one more bowl', function() {
      finalFrame.bowl(5);
      finalFrame.bowl(5);
      finalFrame.bowl(5);
      expect(finalFrame.finish).toEqual(true);
    });

    it('ends the turn after 3 strikes', function() {
      finalFrame.bowl(10);
      finalFrame.bowl(10);
      finalFrame.bowl(10);
      expect(finalFrame.finish).toEqual(true);
    })

    it('does not end the turn after one bowl', function() {
      finalFrame.bowl(4);
      expect(finalFrame.finish).toEqual(false);
    });

    it('throws an error if the turn is over', function() {
      finalFrame.bowl(2);
      finalFrame.bowl(2);
      expect( function(){ finalFrame.bowl(4); } ).toThrow("frame has finished, start a new frame");
    });
  });
});
