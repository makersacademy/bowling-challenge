describe('feature-test', function(){
  var game;
  var frame;
  var spare;
  var strike;
  beforeEach(function(){
    game = new Game();
    frame = new Frame();
    spare = new Frame();
      spare.firstRoll(8);
      spare.secondRoll(2);
    strike = new Frame();
      strike.firstRoll(10);
  });
  describe('game shares info regarding next frames with every frame', function(){
    it('frame knows which are its next and next_next frames', function(){
      game.addFrame(frame);
      game.addFrame(spare);
      game.addFrame(strike);
      game.sharingInfoWithFrames();
      expect(frame.nextRoll()).toEqual(spare);
      expect(frame.nextNextRoll()).toEqual(strike);
    });
    it('spare knows which are its next and next_next frames', function(){
      game.addFrame(spare);
      game.addFrame(strike);
      game.addFrame(frame);
      game.sharingInfoWithFrames();
      expect(spare.nextRoll()).toEqual(strike);
      expect(spare.nextNextRoll()).toEqual(frame);
    });
  });
});
