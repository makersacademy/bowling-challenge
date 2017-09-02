describe('Player', function() {
  var player;


  beforeEach(function() {
    player = new Player();
  });

  it('bowls one ball and receives a score for ball1 between 0 and 10', function() {
    player.bowl();
    expect(player.ball1 >= 0 && player.ball1 <= 10).toBeTruthy();
  });

  it('bowls a second ball and receives a score for ball2 between 0 and the number of remaining pins', function() {
    player.bowl();
    player.bowl();
    expect(player.ball2 <= player.ball1 && player.ball1 <= 10).toBeTruthy();
  });

  it('bowls a spare and records it', function() {
    player.bowl = function() {player.ball1 = 5};
    player.bowl();
    player.bowl = function() {player.ball2 = 5};
    player.bowl();
    player.finishTurn();
    player.calcSparesAndStrikes();
    expect(player.hasSpare).toBeTruthy();
  });

  it('bowls a strike and records it', function() {
    player.bowl = function() {player.ball1 = 10 };
    player.bowl();
    player.finishTurn();
    player.calcSparesAndStrikes();
    expect(player.hasStrike).toBeTruthy();
  });

  it('gets an error message if they try to bowl after the end', function() {
    alert_msg = '_default_';
    spy = spyOn($(document), 'alert').andCallFake(function(msg) {
     alert_msg = msg;
    });
    player.bowled = 20;
    player.hasSpare = false;
    player.hasStrike = false;
    player.bowl();
    expect(alert_msg).toEqual('You have finished your game!');
  });

  it('gets an extra turn if he bowls a spare in the tenth frame', function() {
    player.bowled = 20;
    player.hasSpare = true;
    player.tenthFrame();
    expect(player.ball3 >= 0 && player.ball3 <= 10).toBeTruthy();
  });





});
