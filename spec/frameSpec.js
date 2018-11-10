describe('Frame', function(){
  var frame;
   beforeEach(function() {
    frame = new Frame();
  });
 it('maximum frame is 10', function() {
   expect(frame.getCurrentFrame()).toEqual(10);
 });

 it('after each game played, frame reduces by 1', function() {
   frame.down();
   expect(frame.getCurrentFrame()).toEqual(9);
 });

 it('minumum frame is 1', function() {
   for (var i = 10; i > 0; i--){
   frame.down();
   }
   expect(frame.getCurrentFrame()).toEqual(1);
 });
 });
