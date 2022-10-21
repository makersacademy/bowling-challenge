// to run ESLint - npx eslint yourfile.jsn

```js
class Frame {
  constructor = () => {
    this.frame = [];
    this.firstRoll; // determined by user input
    this.secondRoll; // determined by user input
  }

  isAStrike = () => {
    // firstRoll === 10
  }

  isASpare = () => {
    // firstRoll + secondRoll === 10
  }
}
```

```js
class App {
  constructor = () => {
    this.frames = []
  }

  playFrames = () => {
    // counter = 0
    // while counter < 10 (first 9 frames)

    // frame = new Frame
    // getFirstRoll(frame)
    // frame.isASpare
    // if true =>
      // getSecondRoll(frame)
    // this.frames << frame
  }

  calculateScore = () => {
    // this.frames.forEach (but starting from second frame)

    // let currentFrame = this.frames[i]
    // let previousFrame = this.frames[i - 1]

    // each this.frames.total.sum => to get Total Score
  }

  calculateBonus = (currentFrame, previousFrame) => {
    // if previousFrame.isAStrike
      // previousFrame.total.push(stikeBonus)
    // if previousFrame.isASpare
      //previousFrame.total.push(spareBonus)
  }

  strikeBonus = (currentFrame) => {
    // frame.total.sum
  }

  spareBonus = (currentFrame) => {
    // frame.firstRoll
  }

  getFirstRoll = (frame) => {
    // frame.firstRoll = user input
    // frame.frame << frame.firstRoll
  }

  getSecondRoll = (frame) => {
    // frame.secondRoll = user input
    // frame.frame << frame.secondRoll
  }
}
```