describe('Interface', function() {

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
    jasmine.getStyleFixtures().fixturesPath = './public';
    loadStyleFixtures('stylesheet.css');
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('home.html');
  });

  it('has a title message', function(){
    expect('title').toContainText('Bowling Scoresheet')
  });

  it('has buttons to enter pins scored', function(){
    for (var i = 0; i <= 10; i ++){
      expect('#btn' + i).toContain(i);
    };
  });

  // it('rejects an illegal score', function(){
  //   bowling.roll(5);
  //   expect(function(){bowling.roll(6)}).toThrow('Illegal score');
  // });
});

describe('Interface knows the running score tally for', function(){

  var bowling;
  beforeEach(function(){
    bowling = new Bowling();
  });

  function helper(rolls, pinsEachRoll){
    for (var i = 0; i < rolls; i ++){
      bowling.roll(pinsEachRoll);
    };
  };

  it('two non-spare/non-strike rolls', function(){
    helper(1, 5);
    helper(1, 2);
    expect(bowling.scoresArray).toEqual([5,2]);
  });

  it('a strike and a spare', function(){
    helper(1, 10);
    helper(2, 5);
    expect(bowling.scoresArray).toEqual([10,'X',5,'/']);
  });

  it('a game of all fours', function(){
    helper(20, 4);
    expect(bowling.scoresArray).toEqual([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]);
  });

  it('a perfect game', function(){
    helper(12, 10);
    expect(bowling.scoresArray).toEqual([10,'X',10,'X',10,'X',10,'X',10,'X',10,'X',10,'X',10,'X',10,'X',10,10,10]);
  });

  it('a gutter game', function(){
    helper(20, 0);
    expect(bowling.scoresArray).toEqual([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  });

  it('an example game', function(){
    bowling.roll(1);
    bowling.roll(4);
    bowling.roll(4);
    bowling.roll(5);
    bowling.roll(6);
    bowling.roll(4);
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(10);
    bowling.roll(0);
    bowling.roll(1);
    bowling.roll(7);
    bowling.roll(3);
    bowling.roll(6);
    bowling.roll(4);
    bowling.roll(10);
    bowling.roll(2);
    bowling.roll(8);
    bowling.roll(6);
    expect(bowling.scoresArray).toEqual([1,4,4,5,6,'/',5,'/',10,'X',0,1,7,'/',6,'/',10,'X',2,8,6]);
  });
});
