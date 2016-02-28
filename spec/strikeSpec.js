describe('Strike', function(){
  var strike;

  beforeEach(function(){
    strike = new Strike();
  });

  it('has a default score of ten', function(){
    expect(strike.total).toEqual(10);
  });

  it('is not complete to start with', function(){
    expect(strike.complete).toEqual(false);
  });

  it('has a total score of 15 when adding 5', function(){
    strike.add(5);
    expect(strike.total).toEqual(15);
  });

  it('is not complete after adding one score', function(){
    strike.add(5)
    expect(strike.complete).toEqual(false);
  });
  it('has a score of 20 when adding five then five', function(){
    strike.add(5)
    strike.add(5)
    expect(strike.total).toEqual(20);
  });
  it('is complete after adding two scores', function(){
    strike.add(5)
    strike.add(5)
    expect(strike.complete).toEqual(true)
  })
});
