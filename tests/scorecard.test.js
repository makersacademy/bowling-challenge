import {Scorecard} from "../src/scorecard.js";
import {describe, expect, it} from "@jest/globals";
//import {describe, expect, test} from "@jest/globals";

 describe("Scorecard",()=>{
  it("First Frame",() => {
      let card = new Scorecard()
      card.startGame()
      card.startFrame()
      card.rollInput(1)
      card.rollInput(5)
      card.endFrame()
        expect(card.getScoreFromJustPlayedFrame()).toEqual(6)
    })
 })

//card.rollInput(1)
//card.rollInput(4)
////console.log(card.scorecard,card.total)
//card.rollInput(4)
//card.rollInput(5)
////console.log(card.scorecard,card.total)
//card.rollInput(6)
//card.rollInput(4)