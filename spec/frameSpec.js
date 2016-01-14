
describe ('frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('#getFrameInfo', function() {
    it('Allows to play a frame', function(){
      expect(frame.getFrameInfo()).toEqual({rolls: [],
                                            score: 0, bonus: null});
    });
  });


  // describe('', function() {
  //   it('', function(){
  //   });
  // });
});
