describe('BowlingGame', function(){

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('bowling.html');
  });

  it('displays welcome message', function(){
    expect('#welcome').toContainText('Hi there, ready to start bowling?');
  });


});