describe('Bowling pandemonium', function() {

  var gameRoller = function(rollArray) {
    
    var maxLength = rollArray[0][1].length
    for(var i = 0; i < rollArray.length; i ++) {
      if(rollArray[i][1].length > maxLength) {
        maxLength = rollArray[i][1].length;
      }
    }

    for(var r = 0; r < maxLength; r ++) { //iterate over roll numbers
      for(var p = 0; p < rollArray.length; p ++) { //iterate over player numbers
        if (!rollArray[p][0].game.isOver()) {
          rollArray[p][0].roll((rollArray[p][1][r]));
        }
      }
    }

  };

  beforeEach(function() {
    bowlBonanza = new BowlingContest();

    player1 = new Player();
    player2 = new Player();
    player3 = new Player();
    player4 = new Player();
    player1.game = new Game();
    player2.game = new Game();
    player3.game = new Game();
    player4.game = new Game();
    bowlBonanza.addPlayer(player1);
    bowlBonanza.addPlayer(player2);
    bowlBonanza.addPlayer(player3);
    bowlBonanza.addPlayer(player4);

  });

  it('knows when it is over', function() {
    gameRoller([
               [player1, [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]], //133
               [player2, [9, 0, 3, 5, 6, 1, 3, 6, 8, 1, 5, 3, 2, 5, 8, 0, 7, 1, 8, 1]], //82
               [player3, [9, 0, 3, 7, 6, 1, 3, 7, 8, 1, 5, 5, 0, 10, 8, 0, 7, 3, 8, 2, 8]], //131
               [player4, [10, 3, 7, 6, 1, 10, 10, 10, 2, 8, 9, 0, 7, 3, 10, 10, 10]] //193
              ]);
    expect(bowlBonanza.isOver()).toEqual(true);
  });

  it('knows who the winner is', function() {
    gameRoller([
               [player1, [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]], //133
               [player2, [9, 0, 3, 5, 6, 1, 3, 6, 8, 1, 5, 3, 2, 5, 8, 0, 7, 1, 8, 1]], //82
               [player3, [9, 0, 3, 7, 6, 1, 3, 7, 8, 1, 5, 5, 0, 10, 8, 0, 7, 3, 8, 2, 8]], //131
               [player4, [10, 3, 7, 6, 1, 10, 10, 10, 2, 8, 9, 0, 7, 3, 10, 10, 10]] //193
              ]);
    expect(bowlBonanza.winner()).toBe(player4);
  });
  
});
