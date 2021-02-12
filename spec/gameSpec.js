describe('Bowling', () => {
  let bowling;

  beforeEach(() => {
    bowling = new Bowling;
  });

  describe('No strikes or spares', () => {
    it('can work out a gutter ball', () => {
      console.log(bowling);
      bowling.roll(0, 20);
      console.log(bowling);
      expect(bowling.score()).toEqual(0);
    });
  });

  function rollMultiple(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
      bowling.roll(pins);
    }
  }
});
