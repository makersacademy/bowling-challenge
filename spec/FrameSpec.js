describe ("Frame", function(){
  var frame
  beforeEach(function(){
    frame = new Frame();
  })

   describe ('calculate', function(){
     it("adds the user's roll to the total score of that frame", function(){
       frame.calculate(5)
       expect(frame._frameScore).toEqual(5)
     })
   })

});
