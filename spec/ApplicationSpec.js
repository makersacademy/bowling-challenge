describe('Application of Bowling Score Updater', function() {

  var bowling;

  beforeEach(function(){
    // bowling = new Bowling();
    // jasmine.getStyleFixtures().fixturesPath = './public';
    // loadStyleFixtures('stylesheet.css');
    // jasmine.getFixtures().fixturesPath = '.';
    // loadFixtures('index.html');

    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('a title message', function(){
    expect('title').toContainText("Joe's Bowling Scoresheet")
  });

  it('buttons to enter pins scored', function(){
    for (var i = 0; i <= 10; i ++){
      expect('#btn' + i).toContain(i);
    };
  });

});


//
// describe('Interface knows the cumulative score for', function(){
//
//   var bowling;
//
//   beforeEach(function(){
//     bowling = new Bowling();
//     jasmine.getStyleFixtures().fixturesPath = './public';
//     loadStyleFixtures('stylesheet.css');
//     jasmine.getFixtures().fixturesPath = '.';
//     loadFixtures('home.html');
//     $.holdReady(false);
//   });
//
//   function helper(rolls, score){
//     for (var i = 0; i < rolls; i ++){
//       $("#btn" + score).click();
//     };
//   };
//
//   it('two non-spare/non-strike rolls', function(){
//     $("#btn5").click();
//     $("#btn2").click();
//     expect("#f10score").toContainText('7');
//   });
//
//   it('a strike and a spare', function(){
//     helper(1, 10);
//     helper(2, 5);
//     expect("#f10score").toContainText('30');
//   });
//
//   it('an unremarkable game', function(){
//     helper(20, 4);
//     expect("#f10score").toContainText('80');
//   });
//
//   it('a perfect game', function(){
//     helper(12, 10);
//     expect("#f10score").toContainText('300');
//   });
//
//   it('a gutter game', function(){
//     helper(20, 0);
//     expect("#f10score").toContainText('0');
//   });
//
//   it('an example game', function(){
//     $("#btn1").click();
//     $("#btn4").click();
//     $("#btn4").click();
//     $("#btn5").click();
//     $("#btn6").click();
//     $("#btn4").click();
//     $("#btn5").click();
//     $("#btn5").click();
//     $("#btn10").click();
//     $("#btn0").click();
//     $("#btn1").click();
//     $("#btn7").click();
//     $("#btn3").click();
//     $("#btn6").click();
//     $("#btn4").click();
//     $("#btn10").click();
//     $("#btn2").click();
//     $("#btn8").click();
//     $("#btn6").click();
//     expect("#f10score").toContainText('133');
//   });
// });
