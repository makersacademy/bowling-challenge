describe('Frame', function() {
  var frame;
  // var player;

  beforeEach(function() {
    frame = new Frame();
    // player = jasmine.createSpy('player');
  });

  it('the player starts with an empty socresheet', function() {
    expect(frame.currentScore()).toEqual([]);
  });

  it('the player can knock down a max of 10 pins per go', function() {
    expect(frame.maxScore()).toEqual(10);
    // expect(frame.maxScore()).toEqual([10]);
  });

  it('player can knock down pins', function() {
    // var frame = new Frame([4,4]);
    frame.roll(4);
    expect(frame.currentScore()).toEqual([4]);
  });

  // it('adds up the total for both roles', function() {
  //   // var frame = new Frame([4,4]);
  //   frame.roll(4,4);
  //   expect(frame.total()).toEqual([8]);
  // });


});
