describe('Interface', function() {

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  xit('has buttons to enter pins scored', function(){
    for (var i = 0; i < 11; i ++){
      expect('#pinsButtons').toContain(i);
    };
  });

});
