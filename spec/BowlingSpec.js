/* eslint-disable no-undef */
'use strict'
describe('Bowling', function () {
  var bowling

  beforeEach(function () {
    bowling = new Bowling()
  })

  it('can roll gutter game', function () {
    rollMany(0, 20)
    expect(bowling.score()).toBe(0)
  })

  it('can roll ones', function () {
    rollMany(1, 20)
    expect(bowling.score()).toBe(20)
  })

  it('can roll spare', function () {
    bowling.roll(5)
    bowling.roll(5)
    bowling.roll(3)
    rollMany(0, 17)
    expect(bowling.score()).toBe(16)
  })

  it('can roll a strike', function () {
    bowling.roll(10)
    bowling.roll(4)
    bowling.roll(3)
    rollMany(0, 16)
    expect(bowling.score()).toBe(24)
  })

  it('can roll a perfect game', function () {
    rollMany (10, 12)
    expect(bowling.score()).toBe(300)
  })

  var rollMany = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      bowling.roll(pins)
    }
  }
})
