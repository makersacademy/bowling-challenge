describe('Frame', function(){

});

beforeEach(function(){
  frame = new Frame();
});

it('adds at most 2 rolls when play', function(){
  for (var i = 0; i < 3; i++) {
            frame.play();
          }
expect(frame.roll).toEqual(2);
});
