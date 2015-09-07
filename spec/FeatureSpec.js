describe('Feature tests',function(){

  var scorecard = new Scorecard();

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  it('???', function() {
    expect('__field__').toContainText('________');
  });

});
