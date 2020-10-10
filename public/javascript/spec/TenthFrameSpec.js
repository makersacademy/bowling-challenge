describe('TenthFrame', function () {

  var tenthFrame;

  beforeEach(function () {
    tenthFrame = new TenthFrame();
  });

  it('doesn\'t allow a third roll if no spare or strike', function () {
    tenthFrame.addRoll(4);
    tenthFrame.addRoll(5);
    expect(function () { tenthFrame.addRoll(5) }).toThrow(new Error("You have already finished this frame"));
  });

  it('doesn\'t allow more than 3 rolls', function () {
    tenthFrame.addRoll(5);
    tenthFrame.addRoll(5);
    tenthFrame.addRoll(10);
    expect(function () { tenthFrame.addRoll(5) }).toThrow(new Error("You have already finished this frame"));
  });

  it('allows a 3rd roll to happen if a spare is achieved in rolls 1 and 2', function () {
    tenthFrame.addRoll(5);
    tenthFrame.addRoll(5);
    expect(function () { tenthFrame.addRoll(5) }).not.toThrow();
  });

  it('allows a 2nd and 3rd roll to happen if a strike is achieved in roll 1', function () {
    tenthFrame.addRoll(10);
    tenthFrame.addRoll(5);
    expect(function () { tenthFrame.addRoll(2) }).not.toThrow();
  });

  it('allows a strike, strike and another roll', function () {
    tenthFrame.addRoll(10);
    tenthFrame.addRoll(10);
    expect(function () { tenthFrame.addRoll(2) }).not.toThrow();
  });

  it('doesn\'t allow less than 0 pins to be felled', function () {
    expect(function () { tenthFrame.addRoll(-1) }).toThrow(new Error("You cannot fell fewer pins than 0"));
  });

  it('doesn\'t allow less more than 10 pins to be felled', function () {
    expect(function () { tenthFrame.addRoll(11) }).toThrow(new Error("You cannot fell more pins than 10"));
  });

  it('doesn\'t allow more than 10 pins to be felled in a frame unless there is a strike or spare', function () {
    tenthFrame.addRoll(5);
    expect(function () { tenthFrame.addRoll(6); }).toThrow(new Error("You can only fell 10 pins total in the tenth frame unless you have scored a spare or strike"));
  });

  it('has a score of 30 for 3 strikes in a row', function () {
    tenthFrame.addRoll(10);
    tenthFrame.addRoll(10);
    tenthFrame.addRoll(10);
    expect(tenthFrame.frameScore()).toEqual(30);
  });

  it('has a score of 20 for a spare followed by a  strike ', function () {
    tenthFrame.addRoll(1);
    tenthFrame.addRoll(9);
    tenthFrame.addRoll(10);
    expect(tenthFrame.frameScore()).toEqual(20);
  });


});