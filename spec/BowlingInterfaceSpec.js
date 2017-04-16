describe('BowlingInterface',function(){

  beforeAll(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('starts with a zero score',function(){
    expect('#score').toContainText('0');
  });
});