describe("application", function() {

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  })

  it("displays the text Scorecard before anything is clicked on", function(){
    expect('#score_text').toContainText('Scorecard');
  })

  it("Scorecard changes to running score after first bowl", function() {
    $('#pin_1').click();
    expect($('#score_text').html()).toEqual('Score: ');
    expect('#game_score').toContainText('0');
  });

});