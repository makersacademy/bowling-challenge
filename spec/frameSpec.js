describe('Frame', () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  describe('#initialize', () => {
    it('it checks that there are 10 pins when frame is initialized', () => {
      expect(frame.pins.length).toEqual(10);
    });
  });

  describe('#roll', () => {
    it('it does a roll and the returned value is the number of pins knocked', () => {
      expect(frame.roll(6)).toEqual(6);
    });
  });
});
