describe('Bowling', function(){

  describe('a frame', function(){

    beforeEach(function(){
      frame = new Frame();
      frame.firstTurn = 0;
      frame.secondTurn = 0;
      frame.total = 0;
    });

    it('can return the score from the first turn', function(){
      frame.addFirstScore(1);
      expect(frame.firstTurn).toEqual(1);
    });

    it('can return the score from the second turn', function(){
      frame.addSecondScore(5);
      expect(frame.secondTurn).toEqual(5);
    });

    it('can add the scores and return the total', function(){
      frame.addFirstScore(1);
      frame.addSecondScore(5);
      frame.addTotal();
      expect(frame.total).toEqual(6);
    });
  });
});
