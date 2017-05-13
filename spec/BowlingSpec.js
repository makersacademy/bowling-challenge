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
});
