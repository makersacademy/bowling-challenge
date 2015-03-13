describe('Scorer', function() {
  var scorer = new Scorer();

  it('gives a score of 0 if no pins are hit', function() {
    for (var i = 0; i < 20; i++) {
      scorer.roll(0)
    };
    expect(scorer.total).toEqual(0);
  });

  it('',)




});