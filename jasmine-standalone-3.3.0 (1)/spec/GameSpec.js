describe('Game', function(){
  it('starts with zero score', function(){
    var game = new Game;
    expect(game.score()).toEqual(0);
  })

  it('scores zero for a gutter game', function(){
    var game = new Game;
    for(i=0;i<20;i++){
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

  it('scores 1 + 4 rolled pins', function(){
    var game = new Game;
    game.roll(1);
    game.roll(4);
    expect(game.score()).toEqual(5);
  });

  it('scores 4 + 5 rolled pins', function(){
    var game = new Game;
    game.roll(4);
    game.roll(5);
    expect(game.score()).toEqual(9);
  });

  it('scores spare (4 + 6) bonus (+ 5)', function(){
    var game = new Game;
    game.roll(4);
    game.roll(6); // spare
    game.roll(5);
    game.roll(1);
    expect(game.score()).toEqual(21);
  });

  it('scores spare (0 + 10) bonus (+ 4)', function(){
    var game = new Game;
    game.roll(0);
    game.roll(10); // spare
    game.roll(4);
    game.roll(1);
    expect(game.score()).toEqual(19);
  });

  it('scores strike (10) bonus (3 + 5)', function(){
    var game = new Game;
    game.roll(10); // strike
    game.roll(3);
    game.roll(5);
    expect(game.score()).toEqual(26);
  });

  it('scores a perfect game (300 points)', function(){
    var game = new Game;
    for(i=0;i<12;i++){
      game.roll(10);
    }
    expect(game.score()).toEqual(300);
  });

  it('scores spare bonus in the 10th frame', function(){
    var game = new Game;
    for(i=0;i<18;i++){ // 9 frames
      game.roll(0);
    }
    game.roll(1)
    game.roll(9) // spare in the 10th frame
    game.roll(10) // bonus roll
    expect(game.score()).toEqual(20);
  });

  it('scores a mix of regular, spare and strikes', function(){
    var game = new Game;
    // frame 1
    game.roll(1)
    game.roll(4)
    expect(game.score()).toEqual(5);

    // frame 2
    game.roll(4)
    game.roll(5)
    expect(game.score()).toEqual(14);

    // frame 3
    game.roll(6)
    game.roll(4) // spare

    // frame 4
    game.roll(5)
    game.roll(5) // spare

    // frame 5
    game.roll(10) // strike

    // frame 6
    game.roll(0)
    game.roll(1)
    expect(game.score()).toEqual(61);

    // frame 7
    game.roll(7)
    game.roll(3) // spare

    // frame 8
    game.roll(6)
    game.roll(4) // spare

    // frame 9
    game.roll(10) // strike

    // frame 10
    game.roll(2)
    game.roll(8) // spare

    // bonus roll because of the spare
    game.roll(6)
    expect(game.score()).toEqual(133);
  });

});
