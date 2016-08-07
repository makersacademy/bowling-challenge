// describe('Frame', function(){
//
//   var frame;
//
//   beforeEach(function(){
//     frame = new Frame();
//   });
//
//   it('To play, you roll a ball',function(){
//     // frame.frameScore.length = 0
//     spyOn(Math, 'random').and.returnValue(5/10);
//     frame.Roll()
//     expect(frame.frameScore).toEqual([5]);
//   });
//
//   it('If you score < 10 on FirstRoll, you roll again',function(){
//     spyOn(Math, 'random').and.returnValue(5/10);
//     frame.BowlFrame()
//     expect(frame.frameScore).toEqual([5,5])
//   });
//
//   it('If you score 10 on FirstRoll, you don\'t roll again', function(){
//     spyOn(Math, 'random').and.returnValue(10/10);
//     frame.BowlFrame()
//     expect(frame.frameScore).toEqual([10])
//   });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// });
