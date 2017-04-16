describe('Scoresheet', function() {

  beforeEach(function() {
    scoresheet = new Scoresheet();
  });

  describe('Play a game', function() {
    it('logs two frames', function() {
      scoresheet.addFrame({ total : function() { return 8 } })
      scoresheet.addFrame({ total : function() { return 6 } })
      expect(scoresheet.frames.length).toEqual(2);
    });
  });

});