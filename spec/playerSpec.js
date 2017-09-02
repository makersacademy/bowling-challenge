describe('Player', function() {
  var player;


  beforeEach(function() {
    player = new Player();
  });

  it('bowls one ball and receives a score for ball1 between 0 and 10', function() {
    player.bowl();
    expect(player.ball1 >= 0 && player.ball1 <= 10).toBeTruthy();
  });

  it('bowls a second ball and receives a score for ball2 between their ball1 score and 10', function() {
    player.bowl();
    player.bowl();
    expect(player.ball2 >= player.ball1 && player.ball1 <= 10).toBeTruthy();
  });

  it('bowls a spare and records it', function() {
    player.bowl = function() {player.ball1 = 5};
    player.bowl();
    player.bowl = function() {player.ball2 = 5};
    player.bowl();
    player.finishTurn();
    console.log(player.ball1);
    console.log(player.ball2);
    expect(player.hasSpare).toBeTruthy();
  });

  it('bowls a strike and records it', function() {
    player.bowl = function() {player.ball1 = 10 };
    player.bowl();
    player.finishTurn();
    expect(player.hasStrike).toBeTruthy();
  });





});
