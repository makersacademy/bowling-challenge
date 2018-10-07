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

// describe ("returnRollsLeft", function(){
//   it("returns tolls left", function(){
//     expect(frame.returnRollsLeft()).toEqual(2)
//   })
// })
