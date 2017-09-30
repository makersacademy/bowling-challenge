describe('Frame', function() {
  var frame = new Frame();

  describe('#score', function() {
    it('score starts at 0', function () {
      expect(frame.score()).toBe(0);
    });
  });
});
