describe('Bowling Game Interface', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('there is a bowl button on the screen', function() {
    expect($('#rollbutton')).toExist();
  });

});
