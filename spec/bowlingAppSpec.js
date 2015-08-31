describe('Bowling Application', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('displays welcome to bowling', function() {
    expect('h1').toContainText('Bowling')
  });
});