describe('Frame', () => {
  var frame;

  beforeEach(() => {
    frame = new Frame();
  });


  // describe('scores', () => {
  //   it('can add turn 1 and turn 2 scores', () => {
  //     var t1 = 2;
  //     var t2 = 2;
  //     frame.countScore(t1);
  //     frame.countScore(t2);
  //     expect(frame.score).toBe(4);
  //   });
  // });

  describe('turns', () => {
    it('frame has turn one', () => {
      expect(frame.turnOne).toBe(null)
    });

    it('frame has turn two', () => {
      expect(frame.turnTwo).toBe(null)
    });
  });

  describe('', () => {

  });

});