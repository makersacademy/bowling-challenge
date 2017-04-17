describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("Player can bowl a ball", function() {
    frame.bowl(5);
    expect(frame.pins).toBeLessThan(10)
  });

  it("After player bowls twice, pins are reset", function(){
    frame.bowl(2);
    frame.bowl(3);
    expect(frame.pins).toEqual(10)
  })

  it("After player bowls twice, his score is saved", function(){
    frame.bowl(2);
    frame.bowl(2);
    expect(frame.frameScores).toEqual([[2, 2]])
  })

  it("Resets current frame scores after 2 bowls", function(){
    frame.bowl(4);
    frame.bowl(2);
    expect(frame.currentFrame).toEqual([])
  })

  it("Ends current frame if strike", function(){
    frame.bowl(10)
    expect(frame.currentFrame).toEqual([])
  })

  it("Adds next 2 rolls to first frame score after a strike", function(){
    frame.bowl(10);
    frame.bowl(3);
    frame.bowl(4);
    expect(frame.frameScores).toEqual([[10,3,4],[3,4]])
  })

  it("If 2 strikes adds 2 consecutive rolls to each strike frame", function(){
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(3);
    frame.bowl(3);
    expect(frame.frameScores).toEqual([[10,10,3], [10,3,3],[3,3]])
  })

  it("If 3 strikes adds 2 consecutive rolls to each strike frame", function(){
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(2);
    frame.bowl(3);
    expect(frame.frameScores).toEqual([[10,10,10],[10,10,2],[10,2,3],[2,3]])
  })

  it("Returns to normal scoring 2 bowls after a strike", function(){
    frame.bowl(10);
    frame.bowl(2);
    frame.bowl(3);
    frame.bowl(5);
    frame.bowl(2);
    expect(frame.frameScores).toEqual([[10,2,3],[2,3],[5,2]])
  })

  it("If spare adds next roll on to spare frame score", function(){
    frame.bowl(3);
    frame.bowl(7);
    frame.bowl(2);
    frame.bowl(4);
    expect(frame.frameScores).toEqual([[3,7,2],[2,4]])
  })

  it("Returns to normal scoring 2 bowls after spare", function(){
    frame.bowl(4);
    frame.bowl(6);
    frame.bowl(3);
    frame.bowl(2);
    frame.bowl(4);
    frame.bowl(5);
    expect(frame.frameScores).toEqual([[4,6,3],[3,2],[4,5]])
  })

  it("Is able to reset frame", function(){
    frame.bowl(10)
    frame.bowl(10)
    frame.lastFrame_bowl(10)
    frame.resetGame();
    expect(frame.frameScores).toEqual([])
    expect(frame.currentFrame).toEqual([])
  })

  it("Final frame allows user to bowl twice and records score", function(){
    frame.bowl(10);
    frame.bowl(10);
    frame.lastFrame_bowl(2)
    frame.lastFrame_bowl(5)
    expect(frame.frameScores.slice(-1)[0]).toEqual([2,5])
  })

  it("Final bowl expected to indicate Game Over", function(){
    frame.bowl(10);
    frame.bowl(10);
    frame.lastFrame_bowl(2)
    expect(frame.lastFrame_bowl(5)).toMatch("Game Over!")
  })

  it("If no strike or spare in last frame game should not play anymore",function(){
    frame.bowl(10);
    frame.bowl(10);
    frame.lastFrame_bowl(2)
    frame.lastFrame_bowl(5)
    expect(function(){
      frame.lastFrame_bowl(2);
    }).toThrow('Game is over!');
  })

  it("Records last 4 frames", function(){
    frame.bowl(10);
    frame.bowl(10);
    frame.lastFrame_bowl(2)
    expect(frame.frameScores).toEqual([[10,10,2],[10,2]])
  })

  it("If user bowls a spare in the last frame, is allowed another go",function(){
    frame.bowl(10);
    frame.bowl(10);
    frame.lastFrame_bowl(5)
    frame.lastFrame_bowl(5)
    expect(function(){
      frame.lastFrame_bowl(5);
    }).not.toThrow('Game is over!');
  })

  it("If user bowls a strike, 2 more bowls are allowed",function(){
    frame.bowl(10);
    frame.bowl(10);
    frame.lastFrame_bowl(10)
    frame.lastFrame_bowl(5)
    frame.lastFrame_bowl(2)
    expect(frame.frameScores.slice(-1)[0]).toEqual([10,5,2])
  })

  it("If a user bowls 2 strikes, is allowed a 3rd bowl", function(){
    frame.bowl(10);
    frame.bowl(10);
    frame.lastFrame_bowl(10)
    frame.lastFrame_bowl(10)
    frame.lastFrame_bowl(5)
    expect(frame.frameScores.slice(-1)[0]).toEqual([10,10,5])
  })

  it("Game ends if user bowls 3 strikes",function(){
    frame.bowl(10);
    frame.bowl(10);
    frame.lastFrame_bowl(10)
    frame.lastFrame_bowl(10)
    frame.lastFrame_bowl(10)
    expect(frame.game_over).toBe(true)
  })

  it("Game will record triple strikes in final frame",function(){
    frame.bowl(10);
    frame.bowl(10);
    frame.lastFrame_bowl(10)
    frame.lastFrame_bowl(10)
    frame.lastFrame_bowl(10)
    expect(frame.frameScores.slice(-1)[0]).toEqual([10,10,10])
  })

  it("Perfect game can be achieved", function(){
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.lastFrame_bowl(10)
    frame.lastFrame_bowl(10)
    frame.lastFrame_bowl(10)
    expect(frame.frameScores).toEqual([
      [10,10,10],
      [10,10,10],
      [10,10,10],
      [10,10,10],
      [10,10,10],
      [10,10,10],
      [10,10,10],
      [10,10,10],
      [10,10,10],
      [10,10,10]
    ]
    )
  })
});
