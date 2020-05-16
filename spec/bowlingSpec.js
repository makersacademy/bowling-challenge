describe('Bowling', function() {
    var bowling;
    beforeEach(function() {
      bowling = new Bowling();
    });
  
    it('score at the start of the game is 0', () => {
      expect(bowling.getTotalScore()).toEqual(0);
      expect(bowling.firstBowl).toBe(true);
    });

    describe('Frame score without strikes', function() {
      it('when in position 1 and frame 1', () => {
        bowling.countScore(4);
        expect(bowling.frameScore).toEqual(4);
        expect(bowling.frame).toEqual(1);
        expect(bowling.firstBowl).toBe(false);
      });
      it('when in position 2 and frame 1', () => {
        bowling.countScore(5);
        bowling.countScore(3);
        expect(bowling.getTotalScore()).toEqual(8);
        expect(bowling.firstBowl).toBe(true);
        expect(bowling.frame).toEqual(2);
      });

      it('when in position 1 and frame 2', () => {
        bowling.countScore(4);
        bowling.countScore(4);
        bowling.countScore(4);
        expect(bowling.getTotalScore() + bowling.frameScore).toEqual(12);
        expect(bowling.firstBowl).toBe(false);
        expect(bowling.frame).toEqual(2);
      });
      
    });

    describe('Frame score with strikes', () => {
      it('when in position 1 and frame 1',  () => {
        bowling.countScore(10);
        expect(bowling.getTotalScore()).toBe(10);
        expect(bowling.firstBowl).toBe(true);
        expect(bowling.frame).toEqual(2);
      });
      it('when in position 1 frame 2', () => {
        bowling.countScore(10);
        bowling.countScore(4);
        bowling.countScore(0);
        expect(bowling.getTotalScore()).toEqual(18);
        expect(bowling.firstBowl).toBe(true);
        expect(bowling.frame).toEqual(3);
      });
      it('when in position 1 frame 6', () => {
        for(let i = 0; i < 6; i++) {
          bowling.countScore(10);
        }
        expect(bowling.getTotalScore()).toEqual(150);
      });
    });

});
