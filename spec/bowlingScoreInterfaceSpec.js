describe('Bowling Score Interface',function(){
  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('home.html');
    $.holdReady(false);
  });

  it('starts with dash on all rolls', function(){
    expect('.roll').toContainText('-');
  });

  it('writes the roll score', function(){
    $('#1').click();
    expect('#roll1').toContainText('1');
  });

  it('writes the second roll score', function(){
    clickTimes(2, 2)
    expect('#roll2').toContainText('2');
  });

  it('writes / if is a spare', function(){
    clickTimes(2, 5)
    expect('#roll2').toContainText('/');
  });

  it('writes X if is a strike', function(){
    $('#10').click();
    expect('#roll2').toContainText('X');
  });

  it('leave first roll box empty if is a strike', function(){
    $('#10').click();
    expect('#roll1').toContainText('');
  });

  it('calculates the frame score', function(){
    clickTimes(2, 2)
    expect('.total1').toContainText('4');
  });

  it('calculates cumulative score each frame', function(){
    clickTimes(4, 2);
    expect('.total2').toContainText('8');
  });

  it('if is strike calculates bonus score each frame', function(){
    clickTimes(3, 10);
    expect('.total1').toContainText('30');
  });

  it('if is spare calculates bonus score each frame', function(){
    clickTimes(3, 5);
    expect('.total1').toContainText('15');
  });

  it('calculates the score of the last frame', function(){
    clickTimes(20, 2);
    expect('.total10').toContainText('40');
  });

  it('writes / on the last frame if there\'s a spare', function(){
    clickTimes(20, 5);
    expect('#roll20').toContainText('/');
  });

  it('doesn\'t write / on the last roll box if there\'s a spare', function(){
    clickTimes(21, 5);
    expect('#roll21').toContainText('5');
  });

  it('calculates last frame score if there\'s a spare', function(){
    clickTimes(21, 5);
    expect('.total10').toContainText('150');
  });

  it('calculates the score of a perfect game', function(){
    clickTimes(12, 10);
    expect('.total10').toContainText('300');
  });

  it('don\'t write on last roll box if there\'s no bonus', function(){
    clickTimes(21, 3);
    expect('#roll21').toContainText('-')
  });

  // it('show error message if the roll is invalid', function(){
  //   clickTimes(2, 6);
  //   expect('#error').toContainText('Roll not allowed!')
  // })

});

function clickTimes(times, pins) {
  for(var i=0;i<times;i++) {
    $('#' + pins).click();
  }
}
