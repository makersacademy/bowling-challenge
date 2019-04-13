describe('Bowling frame', function() {
  
  var frame;

  beforeEach(function() {
    frame = new Frame();
    
  });

  it("shows the result of the roll in case of gutter roll", function() {
    frame.roll(0);
    expect( frame.total() ).toEqual(0);
  });
  
  it("shows the result in case of knocking down 5 pins", function() {
    frame.roll(5);
    expect( frame.total() ).toEqual(5);
  });

  it("shows the total of the 2 rolls of a frame", function() {
    frame.roll(1);
    frame.roll(2);
    expect( frame.total() ).toEqual(3);
  });

  it("the total of the 2 rolls of a frame can not exceed 10", function() {
    frame.roll(5);
    frame.roll(6);
    expect( frame.total() ).toEqual(10);
  });

  it("is a strike when player knocks down 10 pines the first roll", function() {
    frame.roll(10);
    expect( frame.isStrike() ).toBe(true);
  });

  it("is not a strike when player does not knock down 10 pines the first roll", function() {
    frame.roll(7);
    expect( frame.isStrike() ).toBe(false);
  });

  it("is a spare when player knocks down 10 pines between the first and the second roll", function() {
    frame.roll(2);
    frame.roll(8);
    expect( frame.isSpare() ).toBe(true);
  });

  it("is not a spare when player knocks down less than 10 pines between the first and the second roll", function() {
    frame.roll(2);
    frame.roll(6);
    expect( frame.isSpare() ).toBe(false);
  });

  it("only allows player to play 2 rolls in a frame", function() {
    frame.roll(1);
    frame.roll(2);
    frame.roll(3);
    expect( frame.total() ).toEqual(3);
  });

  it("given a frame, shows the total of the 2 rolls and keeps the result of the first roll, so that it can be used to calculate the bonus in case of Strike", function() {
    frame.roll(2);
    frame.roll(3);
    expect( frame.get_first_roll() ).toEqual(2); // We need to fullfil this expectation where the lgic for the roll is (within this.roll in frame.js)
    expect( frame.total() ).toEqual(5); // We do not need to do nothing else to fullfill this expectation, since it has been already accomplished with previous logic in this.roll in frame.js
  });

});