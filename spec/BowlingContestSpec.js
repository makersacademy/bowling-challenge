describe ('Bowling contest', function() {

  var rollHelper = function(rollHashArray) {
    for(var i = 0; i < rollHashArray.length; i++) {
      rollHashArray[i]
    }
  };

  beforeEach(function() {
    bowlingContest = new BowlingContest();
    player1 = jasmine.createSpyObj('player', ['roll', 'score']);
    player2 = jasmine.createSpyObj('player', ['roll', 'score']);
    player3 = jasmine.createSpyObj('player', ['roll', 'score']);
    player4 = jasmine.createSpyObj('player', ['roll', 'score']);
    bowlingContest.addPlayer(player1);
    bowlingContest.addPlayer(player2);
    bowlingContest.addPlayer(player3);
    bowlingContest.addPlayer(player4);
  });

  it('allows you to add players', function() {
    expect(bowlingContest.numberOfPlayers()).toEqual(4);
  });

  it('allows the players to roll', function() {
    bowlingContest.players["player1"].roll(7);
    expect(player1.roll).toHaveBeenCalledWith(7);
  });

  it('knows who has won', function() {
    player1.score.and.callFake(function() { return 100; });
    player2.score.and.callFake(function() { return 200; });
    player3.score.and.callFake(function() { return 109; });
    player4.score.and.callFake(function() { return 57; });
    expect(bowlingContest.winner()).toBe(player2);
  });

});