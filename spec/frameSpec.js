describe('Frame',function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('a new frame is active by default', function() {
    expect(frame.isActive).toEqual(true);
  });

  it('score for each frame starts at zero',function() {
    expect(frame.points).toEqual(0);
  });

  it('has a maximum of two rolls', function() {
    expect(frame.maxRolls).toEqual(2);
  });

  it('has 10 pins',function() {
    expect(frame.pins).toEqual(10);
  });

  describe('#reset',function() {
    it('resets to 10 pins after each frame',function() {
      frame.reset();
      expect(frame.points).toEqual(0);
    });
  });




    describe('#isStrike',function() {

      beforeEach(function() {
        frame.isStrike();
      });

      it('ends the frame if the player rolls a strike',function() {
        expect(frame.isActive).toEqual(false);
      });

      it('adds ten points to the score',function() {
        expect(frame.points).toEqual(10);
      });
    });

    describe('#calculatePoints',function() {
      it('adds the 2 rolls together if less than 10 pins were knocked down', function() {
        frame.calculatePoints(2, 3)
        expect(frame.points).toEqual(5);
      });
    });




  });









    // The points for each frame are determined
    // by how many pins are knocked down.



// describe('#calculatePoints',function() {
//   it('is zero points if player knocks down zero pins',function() {

// describe('#strike',function() {
//   it('adds 10 points to the total score of the frame',function() {
//     frame.isStrike();
//   });
// });
