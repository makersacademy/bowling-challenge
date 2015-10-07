describe("Bowlarama", function(){

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = './UserInterface';
    loadFixtures('bowlarama.html');
  })

  it("displays 10 frame score containers", function(){
    expect($('.frame').length).toEqual(10);
  });

  it("clcik bowl and first frame updated with result of first roll", function(){
    spyOn(Math, 'random').and.returnValue(0.6)
    $('button#bowl').click();
    expect('.frame#0').toContainText('6');
  })


});