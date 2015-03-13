describe('Scorer', function() {
  var scorer;

  it('gives a score of 0 if no pins are hit', function() {
    scorer = new Scorer();
    for (var i = 0; i < 20; i++) {
      scorer.roll(0)
    };
    expect(scorer.total()).toEqual(0);
  });

  it('gives a score of 20 if 1 pin is hit each roll', function() {
    scorer = new Scorer();
    for (var i = 0; i < 20; i++) {
      scorer.roll(1)
    };
    expect(scorer.total()).toEqual(20);
  });

  it('gives a score of 12 if the second roll is a spare', function() {
    scorer = new Scorer();
    scorer.roll(4);
    scorer.roll(6);
    scorer.roll(1);
    for (var i = 0; i < 17; i++) {
      scorer.roll(0)
    };
    expect(scorer.total()).toEqual(12);
  });




});