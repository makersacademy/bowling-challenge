describe('Interface', function() {

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('displays the frame scores', function() {
    expect('.frames').toContainText('1')
  });

  xit('bowls and updates a score', function() {

  });

});