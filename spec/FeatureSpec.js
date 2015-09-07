describe('Feature tests',function(){

  var scorecard = new Scorecard();

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });


});
