describe ('Game', function() {
  var game;
  var frame1;
  var frame2;

  beforeEach(function() {
    game = new Game;
    frame1 = new Frame;
    frame2 = new Frame;
  });

  describe('Add frame to the game', function(){
    it('can have more than one frame to the game', function(){
      for(var i=0; i<2; i++){
      game.add_frame(frame1)
    }
    expect(game.frames.length).toBeGreaterThan(1);
    });
  });


  describe('Add frame to the game', function(){
    it('has 10 frames', function(){
      for(var i=0; i<10; i++){
      game.add_frame(frame1)
    }
      expect(function(){game.add_frame(frame1)}).toThrow(new Error('Each game has 10 frames'));
    });
  });

  describe('Gutter game', function() {
    it('When the player never hits a pin (20 zero scores).', function() {
      expect(game.finalScore()).toEqual(0);
    });
  });

  describe('score', function(){
    it('When spare, the score is 10 plus bonus from the next roll', function(){
      game.add_frame(frame1);
      frame1.add_roll(3);
      frame1.add_roll(7);
      game.add_frame(frame2);
      frame2.add_roll(2);
      frame2.add_roll(3);
      expect(game.finalScore()).toEqual(17);
    });
  });

  describe('score', function(){
    it('When strike, the score is 10 plus bonus from the next 2 rolls', function(){
      game.add_frame(frame1);
      frame1.add_roll(10);
      game.add_frame(frame2);
      frame2.add_roll(2);
      frame2.add_roll(3);
      expect(game.finalScore()).toEqual(20);
    });
  });

  // describe('Perfect game', function() {
  //   it('The Perfect Game scores 300 points.', function() {
  //     for(var i=0; i<12; i++){
  //     game.add_frame(frame1)
  //     frame1.add_roll(10);
  //   }
  //     expect(game.finalScore()).toEqual(300);
  //   });
  // });




});
