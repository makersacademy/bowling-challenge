describe("Bowlarama", function(){

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('home.html');
  })

  it("displays 11 frame score containers (10 frames plus total score)", function(){
    expect($('.frame-table').length).toEqual(11);
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
    for (var i = 4; i > 0; i--) {
      $('#bowl').click();
    };

    expect('#total-0').toContainText('8');
    expect('#total-1').toContainText('8');
  })

  it("displays current game total", function(){
    spyOn(Math, 'random').and.returnValue(0.5);
    for (var i = 4; i > 0; i--) {
      $('#bowl').click();
    };

    expect('#game-total').toContainText('16');
  });

  it("strike is represented with an X rather than 10", function(){
    spyOn(Math, 'random').and.returnValue(0.99);
    $('#bowl').click();
    expect('#first-0').toContainText('X');
  });

  it("spare is represented by '/' rather than the second roll score", function(){
    spyOn(Math, 'random').and.returnValue(0.8);
    $('#bowl').click();
    $('#bowl').click();
    expect('#second-0').toContainText('/');
  });

  it("doesn't display individual totals until bonuses are received", function(){
    spyOn(Math, 'random').and.returnValue(0.99);
    $('#bowl').click();
    $('#bowl').click();
    expect($('#total-0').text()).toEqual('');
    $('#bowl').click();
    expect($('#total-0').text()).toEqual('30');
  });

  it("has a reset button that resets the frame without reloading the page", function(){
    spyOn(Math, 'random').and.returnValue(0.5);
    for (var i = 4; i > 0; i--) {
      $('#bowl').click();
    };

    $('#reset').click();
    expect($('#first-0').is(':empty')).toBe(true);
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

  describe("Last frame second roll strike", function() {

    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0.99);
      for (var i = 10; i > 0; i--) {
        $('#bowl').click();
      };

    });

    it("is represented by an 'X'", function(){
      $('#bowl').click();
      expect('#second-9').toContainText('X');
    });

  });

  describe("Last frame third roll strike", function() {

    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0.99);
      for (var i = 11; i > 0; i--) {
        $('#bowl').click();
      };

    });

    it("is represented by an 'X'", function(){
      $('#bowl').click();
      expect('#third-9').toContainText('X');
    });

  });

  describe("Last frame third roll spare", function() {

    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0.99);
      for (var i = 10; i > 0; i--) {
        $('#bowl').click();
      };

    });

    it("is represented by '/'", function(){
      spyOn(Math, 'floor').and.returnValue(5);
      $('#bowl').click();
      $('#bowl').click();
      expect('#third-9').toContainText('/');
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

  describe("Manual input", function(){

    it("allows the user to input specific roll scores", function(){
      spyOn(Math, 'random').and.returnValue(0.1);
      $('#game-switch').click();
      $('#7').click();
      expect('#first-0').toContainText('7');
    });

    it("allows the user to input a zero (added due to user test fail)", function(){
      spyOn(Math, 'random').and.returnValue(0.7);
      $('#game-switch').click();
      $('#0').click();
      expect('#first-0').toContainText('0');
    });

  });

});