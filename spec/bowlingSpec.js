describe('Bowling', function() {
    // method statement
    var bowling;
    beforeEach(function() {
      bowling = new Bowling();
    });
  
    it('score at the start of the game is 0', function() {
      expect(bowling.getTotalScore()).toEqual(0);
    });

    describe('Frame score', function() {
      it('able to count score for the frame', function() {
        bowling.countScore(5);
        expect(bowling.getFrameScore()).toEqual(5);
        expect(bowling.FRAME).toEqual(1)
        expect(bowling.POSITION).not.toEqual(1);
      });
      it('able to count score when in position 2', function() {
        bowling.countScore(5);
        bowling.countScore(3);
        expect(bowling.getFrameScore()).toEqual(8);
        expect(bowling.FRAME).toEqual(2);
        expect(bowling.POSITION).toEqual(2);
      });

    });



});
