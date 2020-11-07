describe('Print', function() {
  var scorecard
  var print

  beforeEach(function() {
    printer = new Print;
    scorecard = new Scorecard;
  });

  it('when given hash output function returns all turns', function() {
    let string = printer.output({1.1:0, 1.2:2}, 2, 1)
    expect(string).toEqual("Frame.Roll = 1.1 Pins knocked = 0\nFrame.Roll = 1.2 Pins knocked = 2\nYour score = 2\n")
  });

});
