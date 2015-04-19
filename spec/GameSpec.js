describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  // inputs and outputs
  // Each frame has 2 rolls: x, y with knocked pins.
  // Frame 10 has an optional 3rd roll, z.
  // inputs are frame (increment), rolls 1 or 2 (&3), knockedpins.
  // outputs is framescore(array) and score(sum)

  it('starts with a score of 0', function(){
    expect(game.score).toEqual(0);
  });

  it('has a framescore sheet to enter 10 frames results', function(){
    expect(game.framescore).toEqual([]);
  });

  it('knows which frame we are at when playing', function(){
    game.rollBall();
    expect(game.framenumber).toEqual(1);
    game.rollBall();
    game.rollBall();
    expect(game.framenumber).toEqual(3);  
  });

  it('knows that the game ends after the 10th frame is done playing', function(){
    for (x=0; x < 10; x++){
    game.rollBall();
    };
    expect(function() { game.rollBall() }).toThrow(new Error('The game is over'));
  });

  it('writes the score of x+y(+z) in the framescore if the sum differs from 10', function(){
    game.rollBall(3, 5);
    game.rollBall(1, 0);
    game.rollBall(3, 0);
    expect(game.framescore).toEqual([8, 1, 3]);
  });

  xit('returns the word STRIKE! if a player knocks 10 pins in the first shot', function() {
  // the below works but I throw stops the code from running it seems), so I have to by pass.
    expect(function() { game.rollBall(10) }).toThrow('STRIKE!');
  });

  xit('returns the word SPARE! if a player knocks 10 pins within 2 shots without a strike', function() {
    expect(function() { game.rollBall(6, 4) }).toThrow('SPARE!');
  });

  it('from frame 1 to 9, doesnt accept a 2nd ball to be thrown on a frame if there was a strike on the 1st', function(){
    expect(function() { game.rollBall(10, 3) }).toThrow(new Error('CHEATER!'));
  });

  it('knows that on the 10th frame, a strike on the 1st ball means at least 2 additional rolls', function(){
    for (x=1; x<10; x++) {
      game.rollBall()
    };
    expect(function() { game.rollBall(10, 2) }).toThrow(new Error('This frame is not over! Roll a ball'));
  }); 

  it('keeps track of every throw (pins knocked out)', function() {
    game.rollBall(3, 5);
    game.rollBall(1, 0);
    game.rollBall(10);
    game.rollBall(8, 2);
    game.rollBall(6, 2);
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(2, 5);
    game.rollBall(0, 5);
    game.rollBall(10, 1, 3);
    expect(game.pinsko).toEqual([3, 5, 1, 0, 10, 8, 2, 6, 2, 10, 10, 2, 5, 0, 5, 10, 1, 3]);
  });

  xit('keeps the score by adding each frame (but waits for strikes and spares)', function(){

  });

  xit('can roll an extra 2 balls if strike on the 1st roll of the 10th frame', function() { 

  });

  xit('can roll an extra ball if spare on the 2nd roll of the 10th frame', function() { 

  });
});