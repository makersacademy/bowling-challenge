describe('Frame', function() {
  var frame;

  describe('Calculates', function(){

    beforeEach(function(){
      frame = new Frame();
    });

    it('the total score of the roll', function(){
      x = frame.roll();
      expect(frame.rollResult()).toEqual(x)
    });

    // it('the total score of the frame', function(){
    //   x = frame.calculate(frame.roll());
    //   y = frame.calculate(frame.roll());
    //   expect(frame.frameTotal()).toEqual(x, y)
    // });

    it("adds the frame total to the game's subtotal", function(){
      game = new Game();
      x = frame.calculate(frame.roll());
      y = frame.calculate(frame.roll());
      expect(game.grandTotal()).toEqual(x, y)
    })

  });



});
