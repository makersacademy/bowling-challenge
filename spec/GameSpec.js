describe ('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('score starts at zero', function(){
    expect(game._total_score).toEqual(0)
  });

  it('adds the score from the frame to the total score', function() {
    game.frame_score(5,2);
    expect(game._total_score).toEqual(7);
  });

  it('adds the score from the frame to the total score when there is more than one frame', function() {
    game.frame_score(5,2);
    game.frame_score(3,1);
    expect(game._total_score).toEqual(11);
  });

  it('it adds on the sum for the next frame when I get a strike on the first roll', function() {
    game.frame_score(10,0);
    game.frame_score(3,0);
    expect(game._total_score).toEqual(16);
  });

  it('it adds on the sum for the next frame when I get a strike on the second frame', function() {
    game.frame_score(3,1);
    game.frame_score(10,0);
    game.frame_score(2,3);
    expect(game._total_score).toEqual(24);
  });

  it('adds on the score from the next roll when I get spare on the first frame', function() {
    game.frame_score(5,5);
    game.frame_score(7,1)
    expect(game._total_score).toEqual(25);
  });

  it('adds on the score from the next roll when I get spare on the second frame', function() {
    game.frame_score(1,5);
    game.frame_score(7,3)
    game.frame_score(2,3);
    expect(game._total_score).toEqual(23);
  });

  it('adds up the next two rolls when I get a strike on the 10th frame', function() {
    var times = 10;
    for(var i=0; i < times; i++){
      game.frame_score(0,0);
    };
    game.frame_score(10,0);
    game.frame_score(10,0);
    game.frame_score(10,0);
    expect(game._total_score).toEqual(30);
  });

  it('adds up the next two rolls when I get a strike on the 10th frame - not a strike on 11th frame', function() {
    var times = 10;
    for(var i=0; i < times; i++){
      game.frame_score(0,0);
    };
    game.frame_score(10,0);
    game.frame_score(3,2);
    expect(game._total_score).toEqual(15);
  });

  it('adds up the next rolls when I get a spare on the 10th frame', function() {
    var times = 10;
    for(var i=0; i < times; i++){
      game.frame_score(0,0);
    };
    game.frame_score(5,5);
    game.frame_score(3,2);
    expect(game._total_score).toEqual(15);
  });

});
