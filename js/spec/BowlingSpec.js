'use strict';

describe("Bowling",function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it("record the numbner of pins knocked down of each roll",function(){
    bowling.knock(3);
  expect(bowling.getKnockedPins()).toBe(3)
  });


  it("record the numbers of pins knocked down in each frame",function(){
      bowling.knock(0);
      bowling.knock(5);
    expect(bowling.getFrameRecord()).toEqual([0, 5])
  });

  it("record the numbers of pins knocked down of frames in the game",function(){
    bowling.knock(0);
    bowling.knock(5);
    bowling.knock(3);
    bowling.knock(4);
    bowling.knock(6);
    bowling.knock(2);
  expect(bowling.getGameRecord()).toEqual([[0, 5],[3, 4],[6,2]])
  });

  it("throw error when sum knocked down is over 10 in each frame",function(){
    bowling.knock(5);
  expect(function(){bowling.knock(6)}).toThrowError("Over 10 knock down in one frame")
  });


  it("caculate the total score",function(){
    bowling.knock(0);
    bowling.knock(5);
    bowling.knock(3);
    bowling.knock(4);
    bowling.calulateTotalScore(1);
    expect(bowling.getTotalScores(2)).toEqual(12)
  })

it("add the one addtional knock down into the sore when spares",function(){
    bowling.knock(4);
    bowling.knock(6);
    bowling.knock(3);
    bowling.knock(4);
    expect(bowling.getTotalScores(1)).toEqual(13);
    expect(bowling.getTotalScores(2)).toEqual(20);
})


  it("add the 3rd knock into the 10th frame when spare",function(){
    for(var i = 0; i< 18; i++){
      bowling.knock(0);
    }
  
    bowling.knock(4);
    bowling.knock(6);
    bowling.knock(9);

    expect(bowling.getFrameRecord()).toEqual([4,6,9])
    expect(bowling.getTotalScores(10)).toEqual(19);
  })


  it("add the two addtional knock down into the sore when strikes",function(){
    bowling.knock(10);
    console.log(bowling._gamerecord);
    bowling.knock(6);
    bowling.knock(3);
    console.log(bowling._gamerecord)
    expect(bowling.getTotalScores(1)).toEqual(19);
    expect(bowling.getTotalScores(2)).toEqual(28);
})

  // it("add the 2nd and 3rd knocks into the 10th frame when strikes",function(){
  //   for(var i = 0; i< 18; i++){
  //     bowling.knock(0);
  //   }

  //   bowling.knock(10);
  //   bowling.knock(6);
  //   bowling.knock(9);

  //   expect(bowling.getFrameRecord()).toEqual([10,6,9])
  // })

});