
describe ('frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('#getFrameInfo', function() {
    it('Returns frame info template', function(){
      expect(frame.getFrameInfo()).toEqual({rolls: [], score: 0, bonus: null});
    });
  });

  describe('#roll', function() {
    describe('Allows to play a frame', function() {
      it('without bonus', function(){
        frame.roll(6);
        frame.roll(3);
        expect(frame.getFrameInfo()).toEqual({rolls: [6, 3],
                                              score: 9, bonus: null});
      });

      describe('with bonus', function() {
        describe('as a spare', function () {
          it('with pins knocked on both rolls', function(){
            frame.roll(5);
            frame.roll(5);
            expect(frame.getFrameInfo()).toEqual({rolls: [5, 5],
                                                  score: 10, bonus: 'spare'});
            });
          it('with pins knocked only on second roll', function () {
            frame.roll(0);
            frame.roll(10);
            expect(frame.getFrameInfo()).toEqual({rolls: [0, 10],
                                                  score: 10, bonus: 'spare'});
          });
        });

        describe('as a strike', function() {
          it('with all pins knocked in the first round', function(){
            frame.roll(10);
            expect(frame.getFrameInfo()).toEqual({rolls: [10, 0],
                                                  score: 10, bonus: 'strike'});
          });
        });
      });
    });
  });
});


// describe('', function() {
//   it('', function(){
//   });
// });
