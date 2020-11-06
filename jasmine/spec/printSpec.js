describe('Print', function() {

  beforeEach(function() {
    printer = new Print;
    scorecard = new Scorecard;
  });

  it('when given nested hash it returns all keys or turns', function() {
    expect(printer.output({1.1:0, 1.2:2}, 2, 1)).toEqual("Frame.Roll = 1.1 Pins knocked = 0\nFrame.Roll = 1.2 Pins knocked = 2\n")
  });

});
