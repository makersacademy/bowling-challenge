describe('bowling: ', function() {

  var player1;
  var score1;

  describe('spy section', function() {


    beforeEach(function() {
      player1 = new Player();
      score1 = new Score();
      roll1 = player1.roll(score1);
      // roll2 = player1.roll(score1);
    });

    it('stores the current frame in allFrames when a strike is rolled', function() {
      spyOn(score1, 'knockedPins').and.returnValue(10);
      expect(score1._allFrames[0]).toEqual([10]);
    });
  });

  describe('frame management: ', function() {

    beforeEach(function() {
      player1 = new Player();
      score1 = new Score();
      roll1 = player1.roll(score1);
      roll2 = player1.roll(score1);
    });

    it('stores the most recent roll', function() {
      expect(score1._mostRecentRoll).toEqual(roll2);
    });

    it('moves the "current roll" to "previous roll" when the ball is rolled again', function() {
      expect(score1._previousRoll).toEqual(roll1);
      expect(score1._mostRecentRoll).toEqual(roll2);
    });


    // it('stores the frame when the frame is finished', function() {
    //   // spyOn(player, 'roll').andReturn()
    //
    //
    //     if (roll1 + roll2 < 10 && roll1 < 10) { //|| roll1 == 0
    //
    //       expect(score1._allFrames[0][0]).toEqual(roll1);
    //
    //       expect(score1._allFrames[0][1]).toEqual(roll2);
    //     } else if (roll1 == 10) {
    //       expect(score1._allFrames[0][0]).toEqual(roll1);
    //       expect(score1._currentFrame[0]).toEqual(roll2);
    //     };
    //   });



      // console.log('roll 1: ' + roll1);
      // console.log('roll 2: ' + roll2);
      // console.log('all frames: ' + score1._allFrames)
      // console.log('current frame: ' + score1._currentFrame)

    // it('moves the current frame to the frame history when the frame is finished (non-strike)', function() {
    //   roll3 = player1.roll(score1);
    //   roll4 = player1.roll(score1);
    //     if (roll1 < 10 ) { //|| roll1 == 0
    //
    //       expect(score1._allFrames[0][0]).toEqual(roll1);
    //
    //       expect(score1._allFrames[0][1]).toEqual(roll2);
    //     } else if (roll1 == 10) {
    //       expect(score1._allFrames[0][0]).toEqual(roll1);
    //       expect(score1._currentFrame[0]).toEqual(roll2);
    //     };
    //   });
    //
    // it('keeps a track of which frame is currently being played', function() {
    //   roll3 = player1.roll(score1);
    //   roll4 = player1.roll(score1);
    //   expect(score1.frameCount()).toEqual(3);
    // });

  });



    //
    // it('', function() {
    //
    // });


  });



// spyOn(airport.weather, 'isStormy').and.returnValue(false);

// it('stores a strike in the first frame if the player rolls a strike', function() {
//   spyOn(score1, 'mostRecentRoll').and.returnValue(10);
//   expect(XXX).toEqual(10);
// });

// console.log('roll 1: ' + roll1);
// console.log('roll 2: ' + roll2);
// console.log('all frames: ' + score1._allFrames)
// console.log('current frame: ' + score1._currentFrame)


// console.log('roll count: ' + rollCount);
