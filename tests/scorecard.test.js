import {Scorecard} from "../src/scorecard.js";
import {describe, expect, test} from "@jest/globals";
//import {describe, expect, test} from "@jest/globals";
let playFrameMock = (roll1, roll2, card) => {
    card.startFrame()
    card.rollInput(roll1)
    card.rollInput(roll2)
    expect(card.getScoreFromJustPlayedFrame()).toEqual(roll1 + roll2)
    card.endFrame()
    return card
}
let playMockGameFirst8Frames = (card) => {
    playFrameMock(1, 4, card)
    playFrameMock(4, 5, card)
    playFrameMock(6, 4, card)
    playFrameMock(5, 5, card)
    playFrameMock(10, 0, card)
    playFrameMock(0, 1, card)
    playFrameMock(7, 3, card)
    playFrameMock(6, 4, card)
}
describe("Scorecard", () => {
    test("First Single Frame, return score from getScore", () => {
        let card = new Scorecard()
        card.startGame()
        playFrameMock(1, 4, card)
        expect(card.getScoreFromJustPlayedFrame()).toEqual(5)
    })
    test("First Single Frame, return object from scorecard", () => {
        let card = new Scorecard()
        card.startGame()
        playFrameMock(1, 4, card)
        expect(card.getScorecard()[0]).toHaveProperty("rolls", [1, 4])
        expect(card.getScorecard()[0]).toHaveProperty("frame", 1)
    })
    test(" return the second Frame, return object from scorecard", () => {
        let card = new Scorecard()
        card.startGame()
        playFrameMock(1, 4, card)
        playFrameMock(5, 4, card)
        expect(card.getScorecard()[1]).toHaveProperty("rolls", [5, 4])
        expect(card.getScorecard()[1]).toHaveProperty("frame", 2)
    })
    test("First Strike then 2nd score Frame", () => {
        let card = new Scorecard()
        card.startGame()
        playFrameMock(10, 0, card)
        playFrameMock(5, 3, card)
        expect(card.getScorecard()[0]).toHaveProperty("bonus", 8)
    })
    test("calculate total score", () => {
        let card = new Scorecard()
        card.startGame()
        playFrameMock(1, 4, card)
        playFrameMock(4, 5, card)
        playFrameMock(6, 4, card)
        playFrameMock(5, 5, card)
        expect(card.getScorecardTotal()).toEqual(39)
    })
    test("should throw when a player tries to play another frame at the end of a game", () => {
        let card = new Scorecard()
        card.startGame()
        Array
            .from({length: 10}, (_, i) => i + 1)
            .map(() => playFrameMock(0, 0, card))

        expect(card.startFrame).toThrow("You cannot start another Frame until you start a new game")
    })
    test("Final Frame score is processed correctly without frame 9 strike ", () => {
        let card = new Scorecard()
        card.startGame()
        playMockGameFirst8Frames(card)
        playFrameMock(5, 4, card)
        card.startFrame()
        card.rollInput(2)
        card.rollInput(8)
        card.rollInput(6)
        card.endFrame()

        expect(card.getScorecardTotal()).toEqual(117)
    })
    test("Final Frame score is processed correctly without any strikes or spares next to frame 10", () => {
        let card = new Scorecard()
        card.startGame()

        playFrameMock(1, 4, card)
        playFrameMock(4, 5, card)
        playFrameMock(6, 4, card)
        playFrameMock(5, 5, card)
        playFrameMock(10, 0, card)
        playFrameMock(0, 1, card)
        playFrameMock(7, 3, card)
        playFrameMock(6, 4, card)
        playFrameMock(5, 4, card)
//         expect(card.getScorecardTotal()).toEqual(107)
        card.startFrame()
        card.rollInput(2) // 106 +2
        card.rollInput(7) // 106 + 8 +2
        card.endFrame()

        expect(card.getScorecardTotal()).toEqual(110)
    })
    test("Final Frame score is processed correctly (Spare)", () => {
        let card = new Scorecard()
        card.startGame()

        playMockGameFirst8Frames(card)
        playFrameMock(10, 0, card)
//         expect(card.getScorecardTotal()).toEqual(107)
        card.startFrame()
        card.rollInput(2) // 106 +2
        card.rollInput(8) // 106 + 8 +2
        card.rollInput(6) //  106 + 8 +2 +6
        card.endFrame()

        expect(card.getScorecardTotal()).toEqual(133)
    })
    test("Final Frame score is processed correctly (Strike)", () => {
        let card = new Scorecard()
        card.startGame()

        playMockGameFirst8Frames(card)
        playFrameMock(10, 0, card)
//         expect(card.getScorecardTotal()).toEqual(107)
        card.startFrame()
        card.rollInput(10) // 106 +2
        card.rollInput(10) // 106 + 8 +2
        card.rollInput(10) //  106 + 8 +2 +6
        card.endFrame()

        expect(card.getScorecardTotal()).toEqual(157)
    })
})

