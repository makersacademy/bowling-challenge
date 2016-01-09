describe ('Bowling', function() {
  var bowling;
});

beforeEach(function() {
  bowling = new Bowling();
});

describe('Sets up default settings', function() {
  it("saves player's name", function() {
    bowling.setPlayerName('William');
    expect(bowling.getPlayerName()).toEqual('William');
  });
});
