describe('game', function() {

});

  var testGame;
  var testFrame;

  beforeEach(function() {
    testGame = new game();
    testFrame = new frame();
  });

  // describe("frameDouble", function() {
  //   var frame, firstScore
  // })
  // describe("A spy", function() {
  //   var foo, bar = null;
  //
  //   beforeEach(function() {
  //     foo = {
  //       setBar: function(value) {
  //         bar = value;
  //       }

  describe('Frame Score', function() {
    it('expects the frame score to be the sum of each roll score by default', function() {
      testFrame.firstRollScore(5);
      testFrame.secondRollScore(3);
      expect(testGame.frameScore(testFrame)).toEqual(8);
    });
  });
