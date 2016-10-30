describe('Frame', function(){
   it('begins each frame with a score of zero', function(){
     var frame = new Frame();
     expect(frame.score1).toBe(0);
   });

   it('is able to return a score out of 10 on the first roll', function(){
     var frame = new Frame();
     frame.roll1();
     expect(frame.score1).toBeGreaterThan(0);
     expect(frame.score1).toBeLessThan(11);

    //  expect(frame.score1).toBeWithInRange(0,10);
  });
});
