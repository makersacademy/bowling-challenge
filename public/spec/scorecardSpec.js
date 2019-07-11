 "use strict";
 
 describe('Scorecard', function() {
   var DoubleFrame = function() {};
   var mockframe;
   var scorecard;

   beforeEach(function () {
     mockframe = new DoubleFrame();
     scorecard = new Scorecard();
   })

   it('adds a frame to it', function () {
 
     scorecard.addFrame(mockframe);
     expect(scorecard.frames).toEqual([mockframe]);
   });
});

