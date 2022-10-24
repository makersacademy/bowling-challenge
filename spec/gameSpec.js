describe('Bowling', () => {
  let bowling;

  beforeEach(() => {
    bowling = new Bowling;
  });

  describe('No strikes or spares', () => {
    it('can work out a gutter ball', () => {
      rollMultiple(0, 20);
      expect(bowling.score()).toEqual(0);
    });

    it('can work out a game with different roll amounts', () => {
      bowling.roll(1);
      bowling.roll(6);
      bowling.roll(2);
      bowling.roll(3);
      bowling.roll(4);
      bowling.roll(5);
      rollMultiple(0, 14);
      expect(bowling.score()).toBe(21);
    });
  });

  describe('Spares', () => {
    it('can work out a spare when not in last frame', () => {
      rollMultiple(0, 10);
      rollMultiple(5, 2);
      rollMultiple(1, 8);
      expect(bowling.score()).toBe(19);
    });

    it('can work a full game of spares', () => {
      rollMultiple(5, 21);
      expect(bowling.score()).toEqual(150);
    });
  });

  describe('Strikes', () => {
    it('can work out a strike in one frame not in the last frame', () => {
        rollMultiple(1, 10);
        bowling.roll(10);
        rollMultiple(1, 8);
        expect(bowling.score()).toEqual(30);
      });
    it('can workout a perfect game', () => {
      rollMultiple(10, 12);
      expect(bowling.score()).toEqual(300);
    });
  });

  describe('game over', () => {
    it('it stops afer 10 normal frames', () => {
      rollMultiple(1, 20);
      bowling.score();
      expect(function () {bowling.roll(1);}).toThrowError('Game is over!');
    });

    it('it stops afer a bonus roll', () => {
      rollMultiple(10, 12);
      bowling.score();
      expect(function () {bowling.roll(1);}).toThrowError('Game is over!');
    });
  });

  describe('current score', () => {
    it('allows a score to be calculated mid game', () => {
      rollMultiple(1, 10);
      expect(bowling.currentScore()).toEqual(10);
    });

    it('allows a score with a strike to be calculated mid game', () => {
      bowling.roll(10);
      rollMultiple(4, 2);
      expect(bowling.currentScore()).toEqual(18);
    });

    it('allows a score with a strike & a strike to be calculated mid game', () => {
      bowling.roll(10);
      rollMultiple(4, 2);
      rollMultiple(5, 2);
      bowling.roll(1);
      expect(bowling.currentScore()).toEqual(29);
    });

  });

  function rollMultiple(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
      bowling.roll(pins);
    }
  }
});
