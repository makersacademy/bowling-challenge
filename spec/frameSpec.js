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
});
