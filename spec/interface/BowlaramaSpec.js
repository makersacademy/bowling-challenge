describe("Bowlarama", function(){

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('bowlarama.html');
  })

  it("displays 10 frame score containers", function(){
    expect($('.frame-table').length).toEqual(10);
  });

  it("click bowl and displays result of first roll", function(){
    spyOn(Math, 'random').and.returnValue(0.6);
    $('#bowl').click();
    expect('#first-0').toContainText('6');
  });

  it("continues to display results of subsequent rolls", function(){
    spyOn(Math, 'random').and.returnValue(0.5);
    for (var i = 5; i > 0; i--) {
      $('#bowl').click();
    };

    expect('#first-1').toContainText('5');
    expect('#second-1').toContainText('3');
    expect('#first-2').toContainText('5');
  });

  it("displays individual frame totals", function(){
    spyOn(Math, 'random').and.returnValue(0.5);
    for (var i = 5; i > 0; i--) {
      $('#bowl').click();
    };

    expect('#total-0').toContainText('8');
    expect('#total-1').toContainText('8');
    expect('#total-2').toContainText('5');
  })

  it("displays current game total", function(){
    spyOn(Math, 'random').and.returnValue(0.5);
    for (var i = 5; i > 0; i--) {
      $('#bowl').click();
    };

    expect('#game-total').toContainText('21');
  });

  describe("Last Frame", function(){

    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0.8);
      for (var i = 18; i > 0; i--) {
        $('#bowl').click();
      };

    });

    it("displays third roll", function(){
      $('#bowl').click();
      $('#bowl').click();
      $('#bowl').click();
      expect('#third-9').toContainText('8')
    });

  });

  describe("THE PERFECT GAME", function(){

    it("can score the perfect game", function(){
      spyOn(Math, 'random').and.returnValue(0.99);
      for (var i = 12; i > 0; i--) {
        $('#bowl').click();
      };

      expect('#game-total').toContainText('300');
    });

  });


});