describe('Spare', function(){
  var spare;

  beforeEach(function(){
    spare = new Spare();
  });

  it('has a default score of ten', function(){
    expect(spare.total).toEqual(10);
  });

  it('is not complete to start with', function(){
    expect(spare.complete).toEqual(false);
  });

  it('has a total score of 15 when adding 5', function(){
    spare.add(5);
    expect(spare.total).toEqual(15);
  });

  it('is complete after adding one score', function(){
    spare.add(5)
    expect(spare.complete).toEqual(true);
  });
  // it('can add 3 to score', function(){
  //   score.add(3);
  //   expect(score.total).toEqual(3);
  // });
  // it('has a default round of zero', function(){
  //   expect(score.round).toEqual(0)
  //
  // });

});
