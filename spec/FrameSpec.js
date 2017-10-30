describe('Frame', function() {
  var frame;
  // var player;

  beforeEach(function() {
    frame = new Frame();
    // player = jasmine.createSpy('player');
  });

  it('starts with an empty scoresheet', function() {
    expect(frame.currentScore()).toEqual([]);
  });

  it('can score the number of pins knocked down on first roll', function() {
    // var frame = new Frame([4,4]);
    frame.rollOne(4);
    expect(frame.currentScore()).toEqual([4]);
  });

  it('can score the number of pins knocked down on second roll', function() {
    // var frame = new Frame([4,4]);
    frame.rollOne(4);
    frame.rollTwo(4);
    expect(frame.currentScore()).toEqual([8]);
  });

  it('scores a max of 10 pins per go', function() {
    expect(frame.maxScore()).toEqual(10);
    // expect(frame.maxScore()).toEqual([10]);
  });

  it('scores a strike', function() {
    expect(frame.strike()).toEqual(10);
    // expect(frame.maxScore()).toEqual([10]);
  });






  // it('can calculate bonus scores when making a spare', function() {
  //   var frameOne = new Frame(4,6);
  //   var frametwo = new Frame(2,4);
  //   expect(frame.frameTotal()).toEqual();
  // });

  // it('can score/tally a spare', function() {
  //   frame.roll(4);
  //   frame.roll(6);
  //   frame.roll(4);
  //   expect(game.score()).toBe([17]);
  // });




});
