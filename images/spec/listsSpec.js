describe('Lists', function() {

  beforeEach(function() {
    spyOn(Math, 'random').and.returnValue(0.1);
  });

  it('selects a random element of a given list', function() {
    expect(lists.random('noun')).toEqual('Bicycle');
  });
});

