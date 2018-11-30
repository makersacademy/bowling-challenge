describe('Bowling', function(){

  describe('a frame', function(){

    beforeEach(function(){
      frame = new Frame();
      frame.firstTurn = 1;
      frame.secondTurn = 5;
      frame.total = 6;
    });

    it('can add the score from the first turn', function(){
      expect(frame.firstTurn).toEqual(1);
    });

    it('can add the score from the second turn', function(){
      expect(frame.secondTurn).toEqual(5);
    });

    it('can add the score from the first turn', function(){
      expect(frame.total).toEqual(6);
    });

  });
});
