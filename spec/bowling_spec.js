describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('can record the number of pins knocked down()', function() {
    bowling.pins(5);
    expect(bowling.score()).toBe(5);
  });

});
