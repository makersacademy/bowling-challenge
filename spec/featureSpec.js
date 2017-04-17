describe('bowlingGame', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('shows the scorecard correctly', function() {
    expect($('.scorecard th').length).toEqual(11);
    expect($('.scorecard tr:nth-child(2) td').length).toEqual(21);
    expect($('.scorecard tr:nth-child(3) td').length).toEqual(11);
  });

  it('register the scores when you click on the roll values, scenario 1', function() {
    $('input').eq(0).click();
    $('input').eq(1).click();
    expect($('.scorecard tr:nth-child(2) td').eq(0)).toContainText(0);
    expect($('.scorecard tr:nth-child(2) td').eq(1)).toContainText(1);
  });

  it('register the scores when you click on the roll values, scenario 2', function() {
    $('input').eq(10).click();
    $('input').eq(10).click();
    expect($('.scorecard tr:nth-child(2) td').eq(0)).toContainText(10);
    expect($('.scorecard tr:nth-child(2) td').eq(1)).toContainText('');
    expect($('.scorecard tr:nth-child(2) td').eq(2)).toContainText(10);
  });

  it('tracks the total score on the third row', function() {
    $('input').eq(10).click();
    $('input').eq(10).click();
    expect($('.scorecard tr:last td').eq(0)).toContainText(20);
    expect($('.scorecard tr:last td').eq(1)).toContainText(30);
  });

  it('also tracks the total score at the end of the third row', function() {
    $('input').eq(10).click();
    expect($('.scorecard tr:last td:last')).toContainText(10);
  });

  it('adds one more cell to the column when there is a 3rd roll in the 10th frame', function() {
    for (roll = 0; roll < 11; roll++) { $('input').eq(10).click(); }
    expect($('.scorecard tr:nth-child(2) td').length).toEqual(21);
    $('input').eq(10).click();
    expect($('.scorecard tr:nth-child(2) td').length).toEqual(22);
    expect($('.scorecard tr:nth-child(2) td:nth-last-child(2)')).toContainText(10);
    expect($('.scorecard tr:nth-child(2) td:nth-last-child(3)')).toContainText(10);
    expect($('.scorecard tr:nth-child(2) td:nth-last-child(4)')).toContainText(10);
  });
});
