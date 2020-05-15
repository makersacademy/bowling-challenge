describe('Bowling', function() {
    // method statement
    var bowling;
    beforeEach(function() {
      bowling = new Bowling();
      bowling.totalScore === 0;
    });
  
    it('score at the start of the game is 0', () => {
      expect(bowling.getTotalScore()).toEqual(0);
      expect(bowling.firstBowl).toBe(true);
    });

    describe('Frame score without strikes', function() {
      it('able to count score when in position 1', () => {
        bowling.countScore(4);
        expect(bowling.getTotalScore()).toEqual(4);
        expect(bowling.frame).toEqual(1);
        expect(bowling.firstBowl).toBe(false);
        expect(bowling.getTotalScore()).toEqual(4);
      });
      it('able to count score when in position 2', () => {
        bowling.countScore(5);
        bowling.countScore(3);
        expect(bowling.getTotalScore()).toEqual(8);
        expect(bowling.firstBowl).toBe(true);
        expect(bowling.frame).toEqual(2);
      });

      describe('Frame score with strikes', () => {
        it('able to count score when in position 1',  () => {
          bowling.countScore(10);
          expect(bowling.getTotalScore()).toBe(10);
          expect(bowling.firstBowl).toBe(true);
          expect(bowling.frame).toEqual(2);
        });
        it('able to count score when in position 2', () => {
          
        });
      });

    });



});
