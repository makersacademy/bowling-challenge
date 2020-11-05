describe('Bowling', function () {

  let bowl;

  beforeEach(function () {
    bowl = new Bowling();
  });

  it('score returns 0', function () {
    expect(bowl.score(0)).toEqual(0);
  });



});