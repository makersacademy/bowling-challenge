describe('Pin', function(){
  beforeEach(function(){
    pin = new Pin();
  });

  it('starts tanding up', function(){
    expect(pin.isStanding).toEqual(true);
  });

  it('can be knocked over', function(){
    pin.hit();
    expect(pin.isStanding).toEqual(false);
  });
});