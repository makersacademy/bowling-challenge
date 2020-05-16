describe('Bowling', function() {
    var bowling;
    beforeEach(function() {
      bowling = new Bowling();
    });
  
    it('score at the start of the game is 0', () => {
      expect(bowling.getTotalScore()).toEqual(0);
      expect(bowling.firstBowl).toBe(true);
    });

    describe('Frame score under 10 pins', function() {
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
      it('when in position 1 and frame 3', () => {
        bowling.countScore(4);
        bowling.countScore(4);
        bowling.countScore(4);
        bowling.countScore(0);
        expect(bowling.getTotalScore()).toEqual(12);
        expect(bowling.firstBowl).toBe(true);
        expect(bowling.frame).toEqual(3);
      });
      it('when in position 2 frame 8', () => {
        for(let i = 0; i < 16; i++) {
          bowling.countScore(1);
        };
        expect(bowling.getTotalScore()).toEqual(16);
        expect(bowling.frame).toEqual(9);
      });
      
    });

    describe('Frame score if strike', () => {
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
        expect(bowling.frame).toEqual(7);
      });
    });

    describe('Frame scores if Spare',  () => {
      it('when in position 1 frame 3', () => {
        bowling.countScore(5);
        bowling.countScore(5);
        bowling.countScore(2);
        bowling.countScore(0);
        expect(bowling.getTotalScore()).toEqual(14);
        expect(bowling.frame).toEqual(3);
      });
      it('when in position 1 frame 9', () => {
        for(let i = 0; i < 18; i++) {
          bowling.countScore(5);
        }
        expect(bowling.getTotalScore()).toEqual(130);
      });

    });

    describe('Frame scores if Strike and Spares', () => {
      it('when in position 1 frame 6', () => {
        bowling.countScore(8);
        bowling.countScore(2);
        bowling.countScore(7);
        bowling.countScore(3);
        bowling.countScore(3);
        bowling.countScore(4);
        bowling.countScore(10);
        bowling.countScore(2);
        bowling.countScore(8);
        bowling.countScore(10);
        bowling.countScore(10);
        bowling.countScore(8);
        bowling.countScore(0);
        expect(bowling.getTotalScore()).toEqual(131);
      });

    });

});
