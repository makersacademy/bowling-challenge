'use strict';

describe ("Scorecard", function() {

  let scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  })

  it ("should return the values of the first frames", () => {
    scorecard.roll([0,0]);
    expect(scorecard.getCurrentScore()).toEqual(0); 
  })

  it ("should return the values of the first two frames", () => {
    scorecard.roll([0,0]);
    scorecard.roll([1,2]);
    expect(scorecard.getCurrentScore()).toEqual(3)
  })
  it ("should test for spares", () => {
    scorecard.roll([7,3]);
    scorecard.roll([1,4]);
    expect(scorecard.getCurrentScore()).toEqual(16);
  })

  it ('should count a strike', () => {
    scorecard.roll("X");
    scorecard.roll([1,4]);
    expect(scorecard.getCurrentScore()).toEqual(20);
    // 10 + 1 + 4 + 1 + 4
  })

  it ('should count the value of two strikes',  () => {
    scorecard.roll([2,3]);
    scorecard.roll("X");
    scorecard.roll("X");
    scorecard.roll([1,0]);
    expect(scorecard.getCurrentScore()).toEqual(38);
    // (2 + 3) + ( 10 + 10 + 1) + (10 + 1 + 0) + (1 + 0)
  })

  it ('should count the value of three strikes', () => {
    scorecard.roll("X");
    scorecard.roll("X");
    scorecard.roll("X");
    scorecard.roll([1,5]);

    expect(scorecard.getCurrentScore()).toEqual(73);
  })
  // (10 + 10 + 10) + ( 10 + 10 + 1) + (10 + 1 + 5) + (1 + 5)

  it ('should test for rolling a spare then a strike', () => {
    scorecard.roll([5,5]);
    scorecard.roll("X");
    scorecard.roll([1,2]);
    expect(scorecard.getCurrentScore()).toEqual(36);

    //(5+5+10)+(10+1+2)+(1+2)

  })

  describe('return the values of the tenth frame', () => {
  it('#no strike or spare', function (){
    for (let i = 0; i < 9; i++) {
      scorecard.roll([1,0]) ;
    }
    scorecard.rollTenthFrame([1,0]);
    expect(scorecard.getCurrentScore()).toEqual(10);

    
  });

  it('#spare', () => {
    for (let i = 0; i < 9; i++) {
      scorecard.roll([1,0]);
    }
    scorecard.rollTenthFrame([5,5,5]);
    expect(scorecard.getCurrentScore()).toEqual(19);
    expect(scorecard.getBonusScore()).toEqual(5);
    //need to refactor the test so we are calling one function not two
  });

  it('#one strike', () => {
    for (let i = 0; i < 9; i++) {
      scorecard.roll([1,0]);
    }
    scorecard.rollTenthFrame(["X",4,3]);
    expect(scorecard.getCurrentScore()).toEqual(19);
    expect(scorecard.getBonusScore()).toEqual(7);
  });

  it('#two strikes', () => {
    for (let i = 0; i < 9; i++) {
      scorecard.roll([1,0]);
    }
    scorecard.rollTenthFrame(["X","X",5]);
    expect(scorecard.getCurrentScore()).toEqual(19);
    expect(scorecard.getBonusScore()).toEqual(15);
  });

  it('#three strikes', () => {
    for (let i = 0; i < 9; i++) {
      scorecard.roll([1,0]);
    }
    scorecard.rollTenthFrame(["X","X","X"]);
    expect(scorecard.getCurrentScore()).toEqual(19);
    expect(scorecard.getBonusScore()).toEqual(20);
  });

  });

  describe('show the final tally', () => {
    it('should return the score for perfect game', () => {
      for (let i = 0; i < 9; i++) {
        scorecard.roll("X");
      }
      scorecard.rollTenthFrame(["X","X","X"]);
      expect(scorecard.getFinalScore()).toEqual("Perfect Game: 300 points");
    })
    it('should return the score for gutter game', () => {
      for (let i = 0; i < 9; i++) {
        scorecard.roll([0,0]);
      }
      scorecard.rollTenthFrame([0,0]);
      expect(scorecard.getFinalScore()).toEqual("Nil pois : 0 points")
    })

    it('should return final score', () => {
      for (let i = 0; i < 9; i++) {
        scorecard.roll([4,4]);
      }
      scorecard.rollTenthFrame([2,8,4]);
      expect(scorecard.getFinalScore()).toEqual('You scored:86 points.');
    })
  });
  

});


// TIDY UP ES6 vs ES5 functions

