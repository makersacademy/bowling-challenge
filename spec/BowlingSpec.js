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

    $.each(standaloneFramesGame,function() {
    standaloneFramesGameTotal += this[0];
    standaloneFramesGameTotal += this[1];
    });

    expect(standaloneFramesGameTotal).toBeLessThan(101);
  });

  it('identifies a strike frame', function() {
    var strikeFrame = [10, 0];
    expect(bowling.isStrike(strikeFrame)).toBe(true);
  });

});

// describe("clicking a thing makes it go up by 1", function() {
//   beforeEach(function() {
//     // set up your ‘fixture’ i.e. the HTML/JS for the feature
//   });

//   it("increments a counter", function() {
//     // use jQuery to fetch the HTML element with the id=“counter"
//     var $counter = $('#counter');
//     var $button = $('#button');

//     // click the button
//     $button.click();
//     // expect the thing to now show 1
//     expect($counter.text()).toContainText("1");
//     // that toContainText is a Jasmine-jQuery matcher
//   });
// });
