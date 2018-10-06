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
     it("descreases the rolls left by one", function(){
       frame.calculate(4)
       expect(frame._rollsLeft).toEqual(1)
     })
   })



});
