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

  it('identifies a strike frame', function() {
    var strikeFrame = [10, 0];
    var notStrikeFrame = [9, 1];
    expect(bowling.isStrike(strikeFrame)).toBe(true);
    expect(bowling.isStrike(notStrikeFrame)).toBe(false);
  });

  it('identifies a spare frame', function() {
    var spareFrame = [5, 5];
    var notSpareFrame = [10, 0];
    expect(bowling.isSpare(spareFrame)).toBe(true);
    expect(bowling.isSpare(notSpareFrame)).toBe(false);
  });

  it('', function() {
    var spareFrame = [5, 5];
    var notSpareFrame = [10, 0];
    expect(bowling.isSpare(spareFrame)).toBe(true);
    expect(bowling.isSpare(notSpareFrame)).toBe(false);
  });

  // it('identifies the number of bonus rolls given ten standalone frames',
  //   function() {
  //     var exampleFrame = [ [ 4, 5 ],
  //                          [ 10, 0 ],
  //                          [ 10, 0 ],
  //                          [ 5, 5 ],
  //                          [ 8, 0 ],
  //                          [ 0, 6 ],
  //                          [ 8, 0 ],
  //                          [ 8, 1 ],
  //                          [ 10, 0 ],
  //                          [ 5, 2 ] ];
  //     var exampleResult = [0, 2, 2, 1, 0, 0, 0, 0, 2, 0];

  //     expect(bowling.findBonus(exampleFrame)).toEqual(exampleResult);
  // });

});