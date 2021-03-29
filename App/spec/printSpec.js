describe('Print class', function() {
  var scorecard
  var print

  beforeEach(function() {
    printer = new Print;
    scorecard = new Scorecard;
  });

  it('when given hash output function returns all turns', function() {
    let string = printer.output({1.1:0, 1.2:2, 2.1:5, 2.2:2, 3.1:6, 3.2:2, 4.1:0, 4.2:0, 5.1:0, 5.2:0, 6.1:0, 6.2:0, 7.1:0, 7.2:0, 8.1:0, 8.2:0, 9.1:0, 9.2:0, 10.1:0, 10.2:0, 10.3:0}, 17, 3)
    expect(string).toEqual("Frame.Roll = 1.1 Pins knocked = 0\nFrame.Roll = 1.2 Pins knocked = 2\nFrame.Roll = 2.1 Pins knocked = 5\nFrame.Roll = 2.2 Pins knocked = 2\nFrame.Roll = 3.1 Pins knocked = 6\nFrame.Roll = 3.2 Pins knocked = 2\nFrame.Roll = 4.1 Pins knocked = 0\nFrame.Roll = 4.2 Pins knocked = 0\nFrame.Roll = 5.1 Pins knocked = 0\nFrame.Roll = 5.2 Pins knocked = 0\nFrame.Roll = 6.1 Pins knocked = 0\nFrame.Roll = 6.2 Pins knocked = 0\nFrame.Roll = 7.1 Pins knocked = 0\nFrame.Roll = 7.2 Pins knocked = 0\nFrame.Roll = 8.1 Pins knocked = 0\nFrame.Roll = 8.2 Pins knocked = 0\nFrame.Roll = 9.1 Pins knocked = 0\nFrame.Roll = 9.2 Pins knocked = 0\nFrame.Roll = 10.1 Pins knocked = 0\nFrame.Roll = 10.2 Pins knocked = 0\nFrame.Roll = 10.3 Pins knocked = 0\nYour score = 17")
  });

});
