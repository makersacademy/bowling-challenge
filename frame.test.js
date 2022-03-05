const Frame = require('./frame');

describe('Frame',() => {
  it('records 4 when 4 pins are knocked over in first roll of frame', () => {
    const frame = new Frame();
    frame.firstRoll(4);
    expect(frame.rollOne[0]).toBe(4)
  })
  
  it('records 6 when 6 pins are knocked over in second roll of frame', () => {
    const frame = new Frame();
    frame.secondRoll(6);
    expect(frame.rollTwo[0]).toBe(6)
  })

  it('records the total pins knocked over in a single frame', () => {
    const frame = new Frame();
    frame.firstRoll(4);
    frame.secondRoll(6);
    expect(frame.frameTotal[0]).toBe(10)
  })

  it('resets the scores for next frame', () => {
    const frame = new Frame();
    frame.firstRoll(4);
    expect(frame.rollOne[0]).toBe(4)
    frame.secondRoll(6);
    expect(frame.rollTwo[0]).toBe(6)
    expect(frame.frameTotal[0]).toBe(10)
    expect(frame.rollOne[1]).toBe(0)
    expect(frame.rollTwo[1]).toBe(0)
  })

  it('records a strike bonus when 10 pins are knocked over in first roll of frame', () => {
    const frame = new Frame();
    frame.firstRoll(10);
    expect(frame.frameBonus[0]).toBe("Strike")
  })

  it('records a spare bonus when 10 pins are knocked in frame total', () => {
    const frame = new Frame();
    frame.firstRoll(5);
    frame.secondRoll(5);
    expect(frame.frameBonus[0]).toBe("Spare")
  })

  it('records a spare bonus points for first roll in following round and adds to previous frame total', () => {
    const frame = new Frame();
    frame.firstRoll(5);
    frame.secondRoll(5);
    expect(frame.frameTotal[0]).toBe(10)
    frame.firstRoll(4);
    frame.secondRoll(4);
    expect(frame.frameBonus[0]).toBe("Spare")
    expect(frame.bonusPoints[0]).toBe(4)
    expect(frame.frameTotal[0]).toBe(14)
  })

  it('records strike bonus points for next two rolls(single frame) and adds to previous frame total', () => {
    const frame = new Frame();
    frame.firstRoll(10);
    expect(frame.frameBonus[0]).toBe("Strike")
    expect(frame.frameTotal[0]).toBe(10)
    frame.firstRoll(5);
    frame.secondRoll(1);
    expect(frame.frameBonus[1]).toBe(0)
    expect(frame.frameTotal[1]).toBe(6)

    expect(frame.bonusPoints[0]).toBe(6)
    expect(frame.frameTotal[0]).toBe(16)
  })

  it('records two strikes in a row and calculates bonus points for next two rolls', () => {
    const frame = new Frame();
    frame.firstRoll(10);
    expect(frame.frameBonus[0]).toBe("Strike")
    expect(frame.frameTotal[0]).toBe(10)
    frame.firstRoll(10);
    expect(frame.frameBonus[1]).toBe("Strike")
    expect(frame.frameTotal[1]).toBe(10)
    expect(frame.frameTotal[0]).toBe(20)
    frame.firstRoll(5);
    frame.secondRoll(1);
    expect(frame.frameBonus[2]).toBe(0)
    expect(frame.frameTotal[2]).toBe(6)
    expect(frame.frameTotal[1]).toBe(16)
    expect(frame.frameTotal[0]).toBe(25)
  })


})
