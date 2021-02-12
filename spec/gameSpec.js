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

  function rollMultiple(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
      bowling.roll(pins);
    }
  }
});
