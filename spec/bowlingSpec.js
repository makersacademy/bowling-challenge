describe("bowling", function() {
  var game;
  var frame;
  var roll;
  });

  beforeEach(function() {
    game = new Game();
    frame = new Frame();

  });

  describe('roll rollscore', function() {
  it("should give an integer from 0 to 10", function() {
    ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    roll = new Roll(5);
    expect(roll.rollScore()).toEqual(5);
  });
});

describe('isStrike', function() {
  it('roll can be a strike', function() {
  roll = new Roll(10);
  expect(roll.isStrike()).toBeTruthy();
  });
});
