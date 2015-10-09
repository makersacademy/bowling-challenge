describe('Bowling',function() {

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('accepts a score', function() {
    expect(bowling.score()).toBeDefined();
  });

  it('generates a random number between 0 and 10', function() {
    spyOn(Math, "random").and.returnValue(0.99);
    expect(bowling.getRandomInt(0, 10)).toEqual(10);
  });

  it('generates a standalone random frame with score total no more than 10',
    function() {
      var frame = bowling.getRandomFrame();
      expect(frame[0] + frame[1]).toBeLessThan(11);
  });

  it('generates a random series of ten standalone frames with score total no\
    more than 100', function() {
    var standaloneFramesGame = bowling.getStandaloneFramesGame();
    var standaloneFramesGameTotal = 0;

    $.each(standaloneFramesGame, function() {
    standaloneFramesGameTotal += this[0];
    standaloneFramesGameTotal += this[1];
    });

    expect(standaloneFramesGameTotal).toBeLessThan(101);
  });

  it('calculates the total score for a frame without bonuses', function() {
    expect(bowling.getFrameTotal([3,4])).toEqual (7);
    expect(bowling.getFrameTotal([10,null])).toEqual (10);
  });

  it('identifies a strike frame', function() {
    var strikeFrame = [10, null];
    var notStrikeFrame = [9, 1];
    expect(bowling.isStrike(strikeFrame)).toBe(true);
    expect(bowling.isStrike(notStrikeFrame)).toBe(false);
  });

  it('identifies a spare frame', function() {
    var spareFrame = [5, 5];
    var notSpareFrame = [10, null];
    expect(bowling.isSpare(spareFrame)).toBe(true);
    expect(bowling.isSpare(notSpareFrame)).toBe(false);
  });

  it('identifies the number of bonus rolls on a frame', function() {
    expect(bowling.findBonusRolls([9,0])).toEqual (0);
    expect(bowling.findBonusRolls([9,1])).toEqual (1);
    expect(bowling.findBonusRolls([10,null])).toEqual (2);
  });

  it('identifies the number of bonus rolls given ten standalone frames',
    function() {
      var exampleGame = [ [ 4, 5 ],
                           [ 10, null ],
                           [ 10, null ],
                           [ 5, 5 ],
                           [ 8, 0 ],
                           [ 0, 6 ],
                           [ 8, 0 ],
                           [ 8, 1 ],
                           [ 10, null ],
                           [ 5, 2 ] ];
      var exampleResult = [0, 2, 2, 1, 0, 0, 0, 0, 2, 0];

      expect(bowling.findAllBonuses(exampleGame)).toEqual(exampleResult);
  });

it('calculates all scores in a game without bonuses',
    function() {
      var exampleGame = [ [ 4, 5 ],
                          [ 10, null ],
                          [ 10, null ],
                          [ 5, 5 ],
                          [ 8, 0 ],
                          [ 0, 6 ],
                          [ 8, 0 ],
                          [ 8, 1 ],
                          [ 10, null ],
                          [ 5, 2 ] ];
      var exampleResult = [9, 10, 10, 10, 8, 6, 8, 9, 10, 7];

      expect(bowling.findStandaloneScores(exampleGame)).toEqual(exampleResult);
  });

  it('allocates bonus points to a game',
    function() {
      var exampleGame = [ [ 4, 5 ],
                          [ 10, null ],
                          [ 10, null ],
                          [ 5, 5 ],
                          [ 8, 0 ],
                          [ 0, 6 ],
                          [ 8, 0 ],
                          [ 8, 1 ],
                          [ 10, null ],
                          [ 5, 2 ] ];
      var exampleScores = bowling.findStandaloneScores(exampleGame);
      var exampleResult = [9, 25, 20, 18, 8, 6, 8, 9, 17, 7];

      expect(bowling.allocateBonuses(exampleGame, exampleScores)).toEqual(exampleResult);
  });

});