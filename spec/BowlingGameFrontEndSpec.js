describe("BowlingGame Front End", function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = './';
    loadFixtures('index.html')
    });

  it('should see game overview table', function() {
    expect($('#game-overview')).toBeInDOM();
    expect($('#game-overview')).toEqual('table');
    expect($('#game-overview')).toContainElement('#table-header');
    expect($('#game-overview')).toContainElement('#table-header');
    expect($('#table-header')).toContainText('Frames');
    expect($('#game-overview')).toContainText('1'); //frames 1-10
    expect($('#game-overview')).toContainText('10');
  });

  it('should see an input field for score', function() {
    expect($('#score-input-field')).toBeInDOM();
    expect($('#score-input-field')).toEqual('input');
  });

  it('should see an enter score button', function() {
    expect($('#enter-score')).toBeInDOM();
    expect($('#enter-score')).toEqual('input');
    expect($('#enter-score')).toHaveValue('Enter Score');
  });

  it('should be able to enter score', function() {
    $('#score-input-field').val('4');
    $('#enter-score').trigger('click');
    expect($('#frame-1')).toContainText('4');
  });

  it('should not be able to enter score under 0 or over 10', function() {
    $('#score-input-field').val('-5');
    $('#enter-score').trigger('click');
    expect($('#score-input-field').val()).toEqual('-5');
    expect($('#frame-1')).toContainText('0');
  });

  it('should not be able to enter string score', function() {
    $('#score-input-field').val('bla');
    $('#enter-score').trigger('click');
    expect($('#score-input-field').val()).toEqual('bla');
    expect($('#frame-1')).toContainText('0');
  });

  // it('should not be able to enter anything other than numbers for score', function() {
  // });
});
