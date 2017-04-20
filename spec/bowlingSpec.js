"use strict"

describe("BowlingGame", function(){
  var bowlingGame

  beforeEach(function(){
    bowlingGame = new BowlingGame();
  })

  describe("Bowl",function(){
    it('returns the number of pins knocked over by the first throw', function(){
      bowlingGame.firstBowl()
      expect(bowlingGame.randomNum).toBeGreaterThan(-1)
      expect(bowlingGame.randomNum).toBeLessThan(11)
    })

    it('returns the number of pins knocked over by the second throw', function(){
      bowlingGame.firstBowl()
      bowlingGame.secondBowl()
      expect(bowlingGame.secondRandomNum).toBeGreaterThan(-1)
      expect(bowlingGame.secondRandomNum).toBeLessThan(11-bowlingGame.randomNum)
    })

    it('returns the number of pins knocked over by the third throw', function(){
      bowlingGame.thirdBowl()
      expect(bowlingGame.thirdRandomNum).toBeGreaterThan(-1)
      expect(bowlingGame.thirdRandomNum).toBeLessThan(11)
    })

    it('returns the number of pins knocked over by the fourth throw', function(){
      bowlingGame.thirdBowl()
      bowlingGame.fourthBowl()
      expect(bowlingGame.fourthRandomNum).toBeGreaterThan(-1)
      expect(bowlingGame.fourthRandomNum).toBeLessThan(11-bowlingGame.thirdRandomNum)
    })
  })

  describe("Score", function(){
    it('adds the number of pins knocked over in the first and second throw together', function(){
      bowlingGame.firstBowl()
      bowlingGame.secondBowl()
      bowlingGame.scoresPerFrame()
      expect(bowlingGame.score).toEqual(bowlingGame.randomNum + bowlingGame.secondRandomNum)
    })
  })

  it('adds the total score for each frame to an array', function(){
    var i = 0
    while (i < 2){
      bowlingGame.firstBowl()
      bowlingGame.secondBowl()
      bowlingGame.scoresPerFrame()
      bowlingGame.storingScores()
      i+=1}
      expect(bowlingGame.allScores.length).toEqual(2)
    })

    it('it works out te sum of the array', function(){
      bowlingGame.randomNum =5
      bowlingGame.secondRandomNum = 3
      bowlingGame.scoresPerFrame()
      bowlingGame.storingScores()
      bowlingGame.randomNum = 2
      bowlingGame.secondRandomNum =6
      bowlingGame.scoresPerFrame()
      bowlingGame.storingScores()

      expect(bowlingGame.totalScore()).toEqual(16)
    })

    it('it adds the numbers in the array together', function(){
      expect(bowlingGame.addingScores(2,6)).toEqual(8)
    })


    it('empties the array after the tenth frame', function(){
      var i = 0
      while (i < 10){
        bowlingGame.firstBowl()
        bowlingGame.secondBowl()
        bowlingGame.scoresPerFrame()
        bowlingGame.storingScores()
        i+=1}
        bowlingGame.firstBowl()
        bowlingGame.secondBowl()
        bowlingGame.scoresPerFrame()
        bowlingGame.storingScores()
        bowlingGame.clearArray()
        expect(bowlingGame.allScores.length).toEqual(0)
      })
      describe("Spare", function(){
        it("checks if the player total score for the frame is ten and adds a third role if it's", function(){
          bowlingGame.randomNum = 8
          bowlingGame.secondRandomNum = 2
          bowlingGame.thirdRandomNum = 5
          bowlingGame.scoresPerFrame()
          bowlingGame.spare()
          expect(bowlingGame.score).toEqual(15)
        })
      })
      describe("Strike", function(){
        it("checks if the player got ten on there first throw and adds teh thrid an fourth role to the score if they did", function(){
          bowlingGame.randomNum = 10
          bowlingGame.secondRandomNum= 0
          bowlingGame.thirdRandomNum = 5
          bowlingGame.fourthRandomNum = 2
          bowlingGame.strike()
          expect(bowlingGame.score).toEqual(17)
        })
      })
    })
