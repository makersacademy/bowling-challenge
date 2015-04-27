describe ('Bowling contest', function() {

  var rollHelper = function(rollHashArray) {
    for(var i = 0; i < rollHashArray.length; i++) {
      rollHashArray[i]
    }
  };

  beforeEach(function() {
    bowlingContest = new BowlingContest();
    player1 = jasmine.createSpyObj('player', ['roll', 'score', 'currentFrameNumber']);
    player2 = jasmine.createSpyObj('player', ['roll', 'score', 'currentFrameNumber']);
    player3 = jasmine.createSpyObj('player', ['roll', 'score', 'currentFrameNumber']);
    player4 = jasmine.createSpyObj('player', ['roll', 'score', 'currentFrameNumber']);
    bowlingContest.addPlayer(player1);
    bowlingContest.addPlayer(player2);
    bowlingContest.addPlayer(player3);
    bowlingContest.addPlayer(player4);
  });

  it('allows you to add players', function() {
    expect(bowlingContest.numberOfPlayers()).toEqual(4);
  });

  it('is not ready when created', function() {
    expect(bowlingContest.isReady).toEqual(false);
  });

  it('can be set to "ready"', function () {
    bowlingContest.setToReady();
    expect(bowlingContest.isReady).toEqual(true);
  });

  it('needs at least one player in order to be ready', function() {
    emptyBowlingContest = new BowlingContest();
    expect(function() { emptyBowlingContest.setToReady() }).toThrow(new Error('Please add a player first'));
  });

  it('allows the players to roll', function() {
    bowlingContest.players["player1"].roll(7);
    expect(player1.roll).toHaveBeenCalledWith(7);
  });

  it('knows who the current player is', function() {
    player1.currentFrameNumber.and.callFake(function() { return 1; });
    player2.currentFrameNumber.and.callFake(function() { return 0; });
    expect(bowlingContest.currentPlayer()).toBe(player2);
  });

  it('knows who has won', function() {
    player1.score.and.callFake(function() { return 100; });
    player2.score.and.callFake(function() { return 200; });
    player3.score.and.callFake(function() { return 109; });
    player4.score.and.callFake(function() { return 57; });
    expect(bowlingContest.winner()).toBe(player2);
  });

  it('knows if it is a draw', function() {
    player1.score.and.callFake(function() { return 100; });
    player2.score.and.callFake(function() { return 100; });
    player3.score.and.callFake(function() { return 100; });
    player4.score.and.callFake(function() { return 100; });
    expect(bowlingContest.winner()).toEqual("Draw");
  });

});