describe('Bowling', function() {

  beforeEach(function() {
    bowling = new Bowling();
  });

  it ('has 10 pins', function() {
    expect(bowling.pins).toBe(10);
  });


});
