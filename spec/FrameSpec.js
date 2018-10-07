describe ("Frame", function(){
  var frame
  beforeEach(function(){
    frame = new Frame();
  })

   describe ('calculate', function(){
     it("adds only the user's roll score to the total score of that frame, if bonus counter is equal to 0 equal to false", function(){
       frame.calculate(5)
       expect(frame.frameScore).toEqual(5)
     })
     it("calls descreaseRoll to descrease the amount of rolls left", function(){
       frame.calculate(5)
       expect(frame._rollsLeft).toEqual(1)
     })

   })

   describe ("decreaseRoll", function(){
     it("decreases the rolls left by one", function(){
       frame._decreaseRoll()
       expect(frame._rollsLeft).toEqual(1)
     })
   })


});
