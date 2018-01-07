describe('Frame', () => {
  var frame;

  beforeEach(() => {
    frame = new Frame();
  });

  describe('turns', () => {
    it('frame has turn one', () => {
      expect(frame.turnOne).toBe(null)
    });

    it('frame has turn two', () => {
      expect(frame.turnTwo).toBe(null)
    });

    it('frame has turn three', () => {
      expect(frame.turnThree).toBe(null)
    });
  });

});