describe('Bowling Application', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('displays welcome to bowling', function() {
    expect('h1').toContainText('Bowling')
  });

 it('shows the scorecard correctly', function() {
   expect($('.bowling_scores th').length).toEqual(11);
   expect($('.bowling_scores tr:nth-child(2) td').length).toEqual(21);
   expect($('.bowling_scores tr:nth-child(3) td').length).toEqual(11);
 });

});