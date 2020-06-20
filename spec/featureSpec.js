describe('feature-test', function(){
  var game;
  var frame1;
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
});
