import {Scorecard} from "../src/scorecard.js";
import {describe, expect, it} from "@jest/globals";
//import {describe, expect, test} from "@jest/globals";
let playFrameMock = (roll1,roll2,card) => {
    card.startFrame()
    card.rollInput(roll1)
    card.rollInput(roll2)
    expect(card.getScoreFromJustPlayedFrame()).toEqual(roll1 +roll2)
    card.endFrame()
    return card
}
 describe("Scorecard",()=>{
  it("First Single Frame, return score from getScore",() => {
      let card = new Scorecard()
      card.startGame()
      playFrameMock(1,4,card)
        expect(card.getScoreFromJustPlayedFrame()).toEqual(5)
    })
     it("First Single Frame, return object from scorecard",() => {
         let card = new Scorecard()
         card.startGame()
         playFrameMock(1,4,card)
         expect(card.getScorecard()[0]).toHaveProperty("rolls",[1,4])
         expect(card.getScorecard()[0]).toHaveProperty("frame",1)
     })
     it(" return the second Frame, return object from scorecard",() => {
         let card = new Scorecard()
         card.startGame()
         playFrameMock(1,4,card)
         playFrameMock(5,4,card)
         expect(card.getScorecard()[1]).toHaveProperty("rolls",[5,4])
         expect(card.getScorecard()[1]).toHaveProperty("frame",2)
     })
     it("First Strike then 2nd score Frame",() => {
         let card = new Scorecard()
         card.startGame()
        playFrameMock(10,0,card)
        playFrameMock(5,3,card)
         expect(card.getScorecard()[0]).toHaveProperty("bonus",8)
     })
     it("calculate total score",() => {
         let card = new Scorecard()
         card.startGame()
         playFrameMock(1,4,card)
         playFrameMock(4,5,card)
         playFrameMock(6,4,card)
         playFrameMock(5,5,card)
         expect(card.getScorecardTotal()).toEqual(39)
     })
     it("should throw when a player tries to play another frame at the end of a game",() => {
         let card = new Scorecard()
         card.startGame()
         playFrameMock(0,0,card)
         playFrameMock(0,0,card)
         playFrameMock(0,0,card)
         playFrameMock(0,0,card)
         playFrameMock(0,0,card)
         playFrameMock(0,0,card)
         playFrameMock(0,0,card)
         playFrameMock(0,0,card)
         playFrameMock(0,0,card)
         playFrameMock(0,0,card)
expect(card.startFrame).toThrow("You cannot start another Frame until you start a new game")
     })

 })

