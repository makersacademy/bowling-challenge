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

    it('it throws an error if player tries to roll more than twice', () => {
      frame.roll(4);
      frame.roll(3);

      expect(() => { frame.roll(6); }).toThrow('You already rolled twice. Start next frame!');
    });

    it('it checks if both rolls are stored for the current frame', () => {
      frame.roll(4);
      frame.roll(3);

      expect(frame.rolls).toEqual([{ roll: 4 }, { roll: 3 }]);
    });
  });
});
