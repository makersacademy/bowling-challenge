
describe("Frame", function() {


  var frame;
  var scorecard;

  beforeEach(function(){

    frame = new Frame();
    // scorecard = new Scorecard();
  });


it('a user can enter how many pins they knocked down on first roll', function(){
  frame.insertRoll1(3);
  expect(frame.pinsDown[0]).toEqual(3);
})

it('a user can enter how many pins they knocked down on second roll', function(){
  frame.insertRoll2(4);
  expect(frame.pinsDown[1]).toEqual(4);
})

it('a user can see how many pins they knocked down on each turn', function(){
  frame.insertRoll1(3);
  frame.insertRoll2(4);
  expect(frame.pinsDown).toEqual([3,4]);
})

// it('calculates total pins down in a frame', function(){
//   frame.insertRoll1(3);
//   frame.insertRoll2(4);
//   expect(frame.totalPinsDown()).toEqual(7);
// })

it('updates the all pins down scoresheet', function(){
  frame.insertRoll1(3);
 frame.insertRoll2(4);
  expect(frame.allPinsDown).toEqual([[3,4]]);
});


it('updates the all pins down scoresheet for more than one frame', function(){
frame.insertRoll1(3);
 frame.insertRoll2(4);
 frame.insertRoll1(2);
 frame.insertRoll2(4);
  expect(frame.allPinsDown).toEqual([[3,4],[2,4]]);
});

it('only lets the player play 10 frames', function(){
  var i
  for(i=0; i<10; i++)
  {frame.insertRoll1(3);
   frame.insertRoll2(4);}
   expect(function(){frame.insertRoll1(2); }).toThrowError("No frames left")

})

it('can handle a spare in the 10th frame', function(){
  var i
  for(i=0; i<9; i++)
  {frame.insertRoll1(3);
   frame.insertRoll2(4);}
   frame.insertRoll1(4);
   frame.insertRoll2(6)
   frame.insertBonusRoll(2)
   console.log(this.bonus)
   expect(frame.scores).toEqual([7, 14, 21, 28, 35, 42, 49, 56, 63, 75])
})


it('lets the player have 3 rolls if they roll a strike in last frame', function(){
  var i
  for(i=0; i<10; i++)
  {frame.insertRoll1(10);}
  expect(function(){frame.insertBonusRoll(2); }).not.toThrowError();

})

it('lets the player have 3 rolls if they roll a spare in last frame', function(){
  var i
  for(i=0; i<9; i++)
  {frame.insertRoll1(10);}
  frame.insertRoll1(6);
  frame.insertRoll2(4);
  expect(function(){frame.insertBonusRoll(2); }).not.toThrowError();

})


// it('only lets the player have 2 rolls per frame', function(){
//   frame.insertRoll1(3);
//  frame.insertRoll2(4);
//  expect(function(){frame.insertBonusRoll(3); }).toThrowError("Only 2 rolls per frame")
//
// })

it('can handle a nearly perfect game', function(){
  var i
  for(i=0; i<9; i++)
  {frame.insertRoll1(10);}
  frame.insertRoll1(4);
  frame.insertRoll2(2);


  expect(frame.scores).toEqual([30, 60, 90, 120, 150, 180, 210, 234, 250, 256]);
})

it('can handle a perfect game', function(){
  var i
  for(i=0; i<10; i++)
  {frame.insertRoll1(10);}
  console.log(frame.pinsDown)
  frame.insertBonusRoll(10)
  console.log(frame.pinsDown)
  frame.insertBonusRoll(10)


  expect(frame.scores).toEqual([30, 60, 90, 120, 150, 180, 210, 240, 270, 300]);
})




it('can handle a normal game', function(){
  var i
     for(i=0; i<10; i++)
    {frame.insertRoll1(4);
    frame.insertRoll2(3);}
    expect(frame.scores).toEqual([7,14,21,28,35,42,49,56,63,70])
})


describe('for frames with a strike', function(){
  it('does not update this.scores when there is a strike', function(){
    frame.insertRoll1(3);
     frame.insertRoll2(4);
     frame.insertRoll1(10);
     expect(frame.scores).toEqual([7]);
  })

  it('does update this.scores when the strike streak ends', function(){
    frame.insertRoll1(3);
     frame.insertRoll2(4);
     frame.insertRoll1(10);
     frame.insertRoll1(3);
      frame.insertRoll2(4);
      expect(frame.scores).toEqual([7, 24, 31]);

  })

  it('adds the next roll to a spare', function(){
    frame.insertRoll1(4);
    frame.insertRoll2(6);
    frame.insertRoll1(2);
    frame.insertRoll2(2);
    expect(frame.scores).toEqual([12, 16])
  })


    it('can handle more than one strike in a row', function(){
      var i
      for(i=0; i<6; i++)
      {frame.insertRoll1(10);}
      expect(frame.scores).toEqual([30, 60, 90, 120])

    })

    it('you get zero for a gutter game', function(){
      var i
      for(i=0; i<10; i++)
      {frame.insertRoll1(0);
      frame.insertRoll2(0);}
      expect(frame.scores[frame.scores.length -1]).toEqual(0)
    })

})


describe('for frames with no strike or spare', function(){

  it('updates this.scores', function(){
    frame.insertRoll1(3);
     frame.insertRoll2(4);
     frame.insertRoll1(4);
      frame.insertRoll2(4);
     expect(frame.scores).toEqual([7,15])
  })




})



it('doesnt update this.scores straight after a strike', function(){
  frame.insertRoll1(3);
   frame.insertRoll2(4);
   frame.insertRoll1(10);
   expect(frame.scores).toEqual([7])
})

it('does update this.scores the turn after a strike if thats not a strike / spare', function(){
  frame.insertRoll1(3);
   frame.insertRoll2(4);
  frame.insertRoll1(10);
  frame.insertRoll1(3);
   frame.insertRoll2(4);
   expect(frame.scores).toEqual([7,24,31])
})




})
