describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling()
  })

  describe('default state', function() {

    it('has a default game array', function() {
      expect(bowling.game).toEqual({
        frame1: [],
        frame2: [],
        frame3: [],
        frame4: [],
        frame5: [],
        frame6: [],
        frame7: [],
        frame8: [],
        frame9: [],
        frame10: []
      });
    })
  })
  describe('adding scores', function() {

    it('can record 2 frames', function() {
      bowling.bowl(1, 1, 5);
      bowling.bowl(1, 2, 3);
      bowling.bowl(2, 1, 6);
      bowling.bowl(2, 2, 1);
      expect(bowling.game).toEqual({
        frame1: [5, 3],
        frame2: [6, 1],
        frame3: [],
        frame4: [],
        frame5: [],
        frame6: [],
        frame7: [],
        frame8: [],
        frame9: [],
        frame10: []
      });
    })
  })
});
