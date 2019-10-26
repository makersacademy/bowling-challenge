
class Frame {
  constructor(number) {
    this.number = number
    this.balls = []
    this.currentBall = 1
    this.box1 = null
    this.box2 = null
    this.fillBox = null
    this.score = 0
    this.isSpare = false
    this.isStrike = true
    this.isFrameTen = false
    this.checkFrameTen()
  }

  checkFrameTen() {
    if (this.number === 10) {
      this.isFrameTen = true
    } else {
      this.isFrameTen = false
    }
  }

  addBall(pins, ball = this.currentBall) {
    let thisBall = new Ball(pins)
    if (this.isFrameTen) {
      console.log("fix frame 10")
    } else if (thisBall.pins === 10) {
      this.isStrike = true
      console.log('Strike!')
    } else {
      this.balls[ball - 1] = thisBall
      console.log('Pins: ' + pins)
    }
    this.update()
  }

  update() {
    switch (this.currentBall) {
      case 1:
        this.updateBox1()
        this.currentBall += 1
        break;
      case 2:
        this.updateBox2()
        break;
      case 3:
        this.updateFillBox()
        break;
    }
  }

  updateBox1() {
    let ball1 = this.balls[0]
    if (ball1.pins === 10) {
      this.box1 = 'X'
    } else {
      this.box1 = ball1.pins
    }
  }

  updateBox2() {
    let ball1 = this.balls[0]
    let ball2 = this.balls[1]
    if (ball1.pins === 10) {
      this.box2 = ' ' // blank as ball1 was a strike
    }
    else if (ball1.pins + ball2.pins === 10) {
      this.box2 = '/'
    } else {
      this.box2 = ball2.pins
    }
  }
}