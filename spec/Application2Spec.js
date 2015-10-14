describe('Application of Bowling Score Updater', function() {

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index2.html');
    $.holdReady(false);
  });

  it('displays an initial total of 0', function(){
    expect('#total_score').toContainText('0');
  });

  it('displays frame1 total after 2 rounds', function(){
    $("#btn4").click();
    $("#btn5").click();
    expect('#f1').toContainText('9');
  });

  it('displays frame2 total after 3 rounds', function(){
    $("#btn4").click();
    $("#btn5").click();
    $("#btn8").click();
    expect('#f2').toContainText('8');
  });

  it('displays frame3 total after 5 rounds', function(){
    $("#btn4").click();
    $("#btn5").click();
    $("#btn0").click();
    $("#btn10").click();
    $("#btn6").click();
    expect('#f3').toContainText('6');
  });

  it('displays strike X after a strike', function(){
    $("#btn4").click();
    $("#btn5").click();
    $("#btn10").click();
    $("#btn10").click();
    $("#btn6").click();
    expect('#f2r2').toContainText('X');
  });

  it('displays spare / after a spare', function(){
    $("#btn4").click();
    $("#btn6").click();
    expect('#f1r2').toContainText('/');
  });

  it('ignores input score which is more than pins avaible', function(){
    $("#btn7").click();
    $("#btn7").click();
    $("#btn2").click();
    $("#btn5").click();
    expect('#f1').toContainText('9');
  });

  it('displays game total after some number of rounds', function(){
    $("#btn4").click();
    $("#btn6").click();
    $("#btn5").click();
    $("#btn3").click();
    $("#btn10").click();
    $("#btn6").click();
    $("#btn3").click();
    $("#btn10").click();
    $("#btn10").click();
    $("#btn9").click();
    expect('#total_score').toContainText('108');
  });

  it('displays game total of 0 after a gutter game', function(){
    for(var i = 1; i < 21; i++){
      $("#btn0").click();
    };
    expect('#total_score').toContainText('0');
  });

  it('displays game total of 300 after a perfect game', function(){
    for(var i = 1; i < 13; i++){
      $("#btn10").click();
    };
    expect('#total_score').toContainText('300');
  });

});
