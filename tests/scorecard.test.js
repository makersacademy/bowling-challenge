import { Scorecard } from '../src/scorecard.js'
import { describe, expect, test } from '@jest/globals'
// import {describe, expect, test} from "@jest/globals";
const playFrameMock = (roll1, roll2, card) => {
  card.startFrame()
  card.rollInput(roll1)
  card.rollInput(roll2)
  expect(card.getScoreFromJustPlayedFrame()).toEqual(roll1 + roll2)
  card.endFrame()
  return card
}
const rollsArray = [[1, 4],
  [4, 5],
  [6, 4],
  [5, 5],
  [10, 0],
  [0, 1],
  [7, 3],
  [6, 4]]
const playMockGameFirst8Frames = (card, rollsArray) => {
  rollsArray.map(roll => playFrameMock(roll[0], roll[1], card))
}
describe('Scorecard', () => {
  test('First Single Frame, return score from getScore', () => {
    const card = new Scorecard()
    card.startGame()
    playFrameMock(1, 4, card)
    expect(card.getScoreFromJustPlayedFrame()).toEqual(5)
  })
  test('First Single Frame, return object from scorecard', () => {
    const card = new Scorecard()
    card.startGame()
    playFrameMock(1, 4, card)
    expect(card.getScorecard()[0]).toHaveProperty('rolls', [1, 4])
    expect(card.getScorecard()[0]).toHaveProperty('frame', 1)
  })
  test(' return the second Frame, return object from scorecard', () => {
    const card = new Scorecard()
    card.startGame()
    playFrameMock(1, 4, card)
    playFrameMock(5, 4, card)
    expect(card.getScorecard()[1]).toHaveProperty('rolls', [5, 4])
    expect(card.getScorecard()[1]).toHaveProperty('frame', 2)
  })
  test('First Strike then 2nd score Frame', () => {
    const card = new Scorecard()
    card.startGame()
    playFrameMock(10, 0, card)
    playFrameMock(5, 3, card)
    expect(card.getScorecard()[0]).toHaveProperty('bonus', 8)
  })
  test('calculate total score', () => {
    const card = new Scorecard()
    card.startGame()
    playFrameMock(1, 4, card)
    playFrameMock(4, 5, card)
    playFrameMock(6, 4, card)
    playFrameMock(5, 5, card)
    expect(card.getScorecardTotal()).toEqual(39)
  })
  test('should throw when a player tries to play another frame at the end of a game', () => {
    const card = new Scorecard()
    card.startGame()
    Array
      .from({ length: 10 }, (_, i) => i + 1)
      .map(() => playFrameMock(0, 0, card))

    expect(card.startFrame).toThrow.toString({ error: 'You cannot start another Frame until you start a new game' })
  })
  test('Final Frame score is processed correctly without frame 9 strike ', () => {
    const card = new Scorecard()
    card.startGame()
    playMockGameFirst8Frames(card, rollsArray)
    playFrameMock(5, 4, card)
    card.startFrame()
    card.rollInput(2)
    card.rollInput(8)
    card.rollInput(6)
    card.endFrame()

    expect(card.getScorecardTotal()).toEqual(117)
  })
  test('Final Frame score is processed correctly without any strikes or spares next to frame 10', () => {
    const card = new Scorecard()
    card.startGame()
    playMockGameFirst8Frames(card, rollsArray)
    playFrameMock(5, 4, card)
    //         expect(card.getScorecardTotal()).toEqual(107)
    card.startFrame()
    card.rollInput(2) // 106 +2
    card.rollInput(7) // 106 + 8 +2
    card.endFrame()

    expect(card.getScorecardTotal()).toEqual(110)
  })
  test('Final Frame score is processed correctly (Spare)', () => {
    const card = new Scorecard()
    card.startGame()
    playMockGameFirst8Frames(card, rollsArray)
    playFrameMock(10, 0, card)
    //         expect(card.getScorecardTotal()).toEqual(107)
    card.startFrame()
    card.rollInput(2) // 106 +2
    card.rollInput(8) // 106 + 8 +2
    card.rollInput(6) //  106 + 8 +2 +6
    card.endFrame()

    expect(card.getScorecardTotal()).toEqual(133)
  })
  test('Final Frame score is processed correctly (Strike)', () => {
    const card = new Scorecard()
    card.startGame()

    playMockGameFirst8Frames(card, rollsArray)
    playFrameMock(10, 0, card)
    card.startFrame()
    card.rollInput(10) // 106 +2
    card.rollInput(10) // 106 + 8 +2
    card.rollInput(10) //  106 + 8 +2 +6
    card.endFrame()
    expect(card.getScorecardTotal()).toEqual(157)
  })
  test('Perfect Game', () => {
    const card = new Scorecard()
    card.startGame()
    const x = [[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0]]
    playMockGameFirst8Frames(card, x)
    card.startFrame()
    card.rollInput(10)
    card.rollInput(10)
    card.rollInput(10)
    card.endFrame()
    //    playFrameMock(10, 0, card)

    expect(card.getScorecardTotal()).toEqual(300)
  })
})
