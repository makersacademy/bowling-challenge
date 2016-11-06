describe('bowling: ', function() {

  var score1;

    beforeEach(function() {
      score1 = new Score();
      rollsMadeThisFrame = 0;
    });

    it('stores a roll in current frame', function() {
      score1.roll(5);
      expect(score1._currentFrame[0]).toEqual(5);
      // console.log('rollsMadeThisFrame: ' + rollsMadeThisFrame);
    });

    it('stores 2 rolls in all frames', function(){
      score1.roll(3);
      score1.roll(4);
      expect(score1._allFrames).toEqual([[3,4]]);
    });

    it('stores a strike in a frame by itself', function(){
      score1.roll(10);
      expect(score1._allFrames).toEqual([[10]]);
      expect(score1._currentFrame).toEqual([]);
    });

    it('stores the roll after a strike in current frame', function(){
      score1.roll(10);
      score1.roll(3);
      expect(score1._allFrames).toEqual([[10]]);
      expect(score1._currentFrame).toEqual([3]);
    });

    it('stores a series of rolls in the correct place', function(){
      score1.roll(0);
      score1.roll(3);
      score1.roll(10);
      score1.roll(1);
      score1.roll(9);
      score1.roll(3);
      score1.roll(5);
      score1.roll(6);
      expect(score1._allFrames).toEqual([[0,3],[10],[1,9],[3,5]]);
      expect(score1._currentFrame).toEqual([6]);
    });

    it('calculates the running total', function(){
      score1.roll(2);
      score1.roll(3);
      score1.roll(4);
      score1.roll(5);
      expect(score1.runningTotal()).toEqual(14);
    });

    it('calculates the running total and strike bonuses', function(){
      score1.roll(10);
      score1.roll(3);
      score1.roll(4);
      score1.roll(5);
      // console.log('strikeBonus: ' + score1.strikeBonus());
      expect(score1.runningTotal()).toEqual(29);
    });

    it('calculates the running total and spare bonuses', function(){
      score1.roll(1);
      score1.roll(9);
      score1.roll(4);
      score1.roll(5);
      // console.log('strikeBonus: ' + score1.spareBonus());
      expect(score1.runningTotal()).toEqual(23);
    });

    it('calculates the running total when there are spares and strikes', function(){
      score1.roll(1);
      score1.roll(9);
      score1.roll(4);
      score1.roll(5);
      score1.roll(10);
      score1.roll(9);
      score1.roll(4);
      score1.roll(5);
      score1.roll(2);
      // console.log('spareBonus: ' + score1.spareBonus());
      // console.log('strikeBonus: ' + score1.spareBonus());
      expect(score1.runningTotal()).toEqual(66);
    });

    it('accurately calculates score when a strike has just happened', function(){
      score1.roll(1);
      score1.roll(7);
      score1.roll(4);
      score1.roll(5);
      score1.roll(10);
      // console.log('spareBonus: ' + score1.spareBonus());
      // console.log('strikeBonus: ' + score1.spareBonus());
      expect(score1.runningTotal()).toEqual(27);
    });

    it('accurately calculates score when a spare has just happened', function(){
      score1.roll(1);
      score1.roll(7);
      score1.roll(4);
      score1.roll(4);
      score1.roll(5);
      score1.roll(5);
      // console.log('spareBonus: ' + score1.spareBonus());
      // console.log('strikeBonus: ' + score1.spareBonus());
      expect(score1.runningTotal()).toEqual(26);
    });

    it('accurately calculates the score when 3 strikes are rolled in the last frame', function(){
      score1.roll(1);
      score1.roll(1);

      score1.roll(1);
      score1.roll(1);

      score1.roll(1);
      score1.roll(1);

      score1.roll(1);
      score1.roll(1);

      score1.roll(1);
      score1.roll(1);

      score1.roll(1);
      score1.roll(1);

      score1.roll(1);
      score1.roll(1);

      score1.roll(1);
      score1.roll(1);

      score1.roll(1);
      score1.roll(1);
      console.log("starting the 3 strikes")
      score1.roll(10);
      score1.roll(10);
      score1.roll(10);
      console.log("finalFrameTotal: " + score1.finalFrameTotal)
      console.log("runningTotal: " + score1.runningTotal)

      expect(score1.runningTotal()).toEqual(48);
    });

    it('accurately calculates the score when a spare is rolled in the last frame', function(){
      score1.roll(1);
      score1.roll(1);

      score1.roll(1);
      score1.roll(1);

      score1.roll(1);
      score1.roll(1);

      score1.roll(1);
      score1.roll(1);

      score1.roll(1);
      score1.roll(1);

      score1.roll(1);
      score1.roll(1);

      score1.roll(1);
      score1.roll(1);

      score1.roll(1);
      score1.roll(1);

      score1.roll(1);
      score1.roll(1);
      console.log("starting the 3 strikes")
      score1.roll(1);
      score1.roll(9);
      score1.roll(6);
      console.log("finalFrameTotal: " + score1.finalFrameTotal)
      console.log("runningTotal: " + score1.runningTotal)

      expect(score1.runningTotal()).toEqual(34);
    });


});


// console.log('rollsMadeThisFrame: ' + rollsMadeThisFrame);
// console.log('current frame: ' + score1._currentFrame)
// console.log('all frames: ' + score1._allFrames)
// 108?
// console.log('baseTotal: ' + score1.baseTotal());
// // 30?
// console.log('spareBonus: ' + score1.spareBonus());
// // 8?
// console.log('strikeBonus: ' + score1.strikeBonus());
// // 30
// console.log('finalFrameScore: ' + score1.finalFrameScore());
// console.log('current frame: ' + score1._currentFrame)
// console.log('all frames: ' + score1._allFrames)









































  // describe('frame management: ', function() {
  //
  //   beforeEach(function() {
  //     player1 = new Player();
  //     score1 = new Score();
  //     roll1 = player1.roll(score1);
  //     roll2 = player1.roll(score1);
  //   });
  //
  //   it('stores the most recent roll', function() {
  //     expect(score1._mostRecentRoll).toEqual(roll2);
  //   });
  //
  //   it('moves the "current roll" to "previous roll" when the ball is rolled again', function() {
  //     expect(score1._previousRoll).toEqual(roll1);
  //     expect(score1._mostRecentRoll).toEqual(roll2);
  //   });
  //
  //
  //   // it('stores the frame when the frame is finished', function() {
  //   //   // spyOn(player, 'roll').andReturn()
  //   //
  //   //
  //   //     if (roll1 + roll2 < 10 && roll1 < 10) { //|| roll1 == 0
  //   //
  //   //       expect(score1._allFrames[0][0]).toEqual(roll1);
  //   //
  //   //       expect(score1._allFrames[0][1]).toEqual(roll2);
  //   //     } else if (roll1 == 10) {
  //   //       expect(score1._allFrames[0][0]).toEqual(roll1);
  //   //       expect(score1._currentFrame[0]).toEqual(roll2);
  //   //     };
  //   //   });
  //
  //
  //
  //     // console.log('roll 1: ' + roll1);
  //     // console.log('roll 2: ' + roll2);
  //     // console.log('all frames: ' + score1._allFrames)
  //     // console.log('current frame: ' + score1._currentFrame)
  //
  //   // it('moves the current frame to the frame history when the frame is finished (non-strike)', function() {
  //   //   roll3 = player1.roll(score1);
  //   //   roll4 = player1.roll(score1);
  //   //     if (roll1 < 10 ) { //|| roll1 == 0
  //   //
  //   //       expect(score1._allFrames[0][0]).toEqual(roll1);
  //   //
  //   //       expect(score1._allFrames[0][1]).toEqual(roll2);
  //   //     } else if (roll1 == 10) {
  //   //       expect(score1._allFrames[0][0]).toEqual(roll1);
  //   //       expect(score1._currentFrame[0]).toEqual(roll2);
  //   //     };
  //   //   });
  //   //
  //   // it('keeps a track of which frame is currently being played', function() {
  //   //   roll3 = player1.roll(score1);
  //   //   roll4 = player1.roll(score1);
  //   //   expect(score1.frameCount()).toEqual(3);
  //   // });
  //
  // });
  //
  //
  //
  //   //
  //   // it('', function() {
  //   //
  //   // });
  //





// spyOn(airport.weather, 'isStormy').and.returnValue(false);

// it('stores a strike in the first frame if the player rolls a strike', function() {
//   spyOn(score1, 'mostRecentRoll').and.returnValue(10);
//   expect().toEqual(10);
// });

// console.log('roll 1: ' + roll1);
// console.log('roll 2: ' + roll2);
// console.log('all frames: ' + score1._allFrames)
// console.log('current frame: ' + score1._currentFrame)


// console.log('roll count: ' + rollCount);
