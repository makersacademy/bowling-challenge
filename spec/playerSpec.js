describe('Player', function() {
  var player;


  beforeEach(function() {
    player = new Player();
  });

  // afterEach(function(){
  //   player.ball1 = undefined;
  //   player.ball2 = undefined;
  // });

  it('bowls a spare and records it', function() {
    player.bowl(5);
    player.finishBall();
    player.calcSparesAndStrikes();
    player.switchBall();
    player.bowl(5);
    player.finishBall();
    player.calcSparesAndStrikes();
    expect(player.hasSpare).toBeTruthy();
  });

  it('bowls a strike and records it', function() {
    player.bowl(10);
    player.finishBall();
    player.calcSparesAndStrikes();
    player.switchBall();
    player.bowl(0);
    player.finishBall();
    player.calcSparesAndStrikes();
    expect(player.hasStrike).toBeTruthy();
  });

  it('cannot bowl after he has bowled 10 frames', function() {
    player.bowled = 20;
    player.ball = 2;
    player.hasSpare = false;
    player.hasStrike = false;
    expect(function(){ player.switchBall() } ).toThrow('Your game is over!');
  });

  it('can bowl a third ball if he bowls a spare in the last frame', function() {
    player.bowled = 20;
    player.ball = 2;
    player.hasSpare = true;
    player.switchBall();
    player.bowl(4);
    expect(player.ball).toEqual(3);
  });





});
