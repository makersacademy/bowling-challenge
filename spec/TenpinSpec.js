describe("Tenpin", function() {

  it('frame sums two rolls and adds them to the score card', function() {
    var tenpin = new Tenpin();
    tenpin.frame(3,4);
    expect(tenpin.scoreCard).toEqual([7])
  })

  it('the first roll after a spare is added as a bonus to the last frame score', function() {
    var tenpin = new Tenpin();
    tenpin.frame(7,3);
    tenpin.frame(5,3);
    expect(tenpin.scoreCard).toEqual([15, 8]);
  })

  it('if two spares in a row the first roll of the second frame is added as a bonus to the first roll but the score of the second frame is not calculated', function() {
    var tenpin = new Tenpin();
    tenpin.frame(7,3);
    tenpin.frame(5,5);
    expect(tenpin.scoreCard).toEqual([15]);
  })

  it('after a strike the sum of the next two rolls is added to the score for the last frame as a bonus', function() {
    var tenpin = new Tenpin();
    tenpin.frame(10,0);
    tenpin.frame(3,5);
    expect(tenpin.scoreCard).toEqual([18, 8]);
  })

  it('after a strike if the next frame is a strike the score is not calculated until the score of the following frame can be used to calculate the bonus', function() {
    var tenpin = new Tenpin();
    tenpin.frame(10,0);
    tenpin.frame(10,0);
    tenpin.frame(3, 1);
    expect(tenpin.scoreCard).toEqual([23, 14, 4]);
  })

  it('ten frames of non strikes and spares are logged correctly', function() {
    var tenpin = new Tenpin();
    for (i = 1; i < 11; i++) {
      tenpin.frame(3,4);
    }
    expect(tenpin.scoreCard).toEqual([7, 7, 7, 7, 7, 7, 7, 7, 7, 7]);
  });

  it('ten strikes in a row logs ten frames of thirty points for a total of 300', function() {
    var tenpin = new Tenpin();
    for (i = 1; i < 11; i++) {
      tenpin.frame(10,0);
    };
    tenpin.frame(10,10);
    expect(tenpin.scoreCard).toEqual([30, 30, 30, 30, 30, 30, 30, 30, 30, 30]);
  });

  it('ten strikes in a row plus bonus balls', function() {
    var tenpin = new Tenpin();
    for (i = 1; i < 11; i++) {
      tenpin.frame(10,0);
    };
    tenpin.frame(3,4);
    expect(tenpin.scoreCard).toEqual([30, 30, 30, 30, 30, 30, 30, 30, 30, 17]);
  });


});
