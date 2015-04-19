describe('Interface', function() {

  var bowling = new Bowling();

  beforeEach(function(){
    jasmine.getStyleFixtures().fixturesPath = './public';
    loadStyleFixtures('stylesheet.css');
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('has welcome message', function(){
    expect('.title').toHaveText('Bowling Scoresheet')
  });

  it('has buttons to enter pins scored', function(){
    for (var i = 0; i <= 10; i ++){
      expect('#btn' + i).toContain(i);
    };
  });

});
