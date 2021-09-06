/*jshint esversion: 6 */
'use strict';

class Frame {

  #maxFrames = 10;

  constructor() {
    this._bowls = [];
    this._frameCount = 1;
  }

  bowls() {
    return this._bowls;
  }

  addBowl(number) {
    this.#newFrame();
    this.#noNegativeNums(number);

    this._bowls.push(number);
    this.#resetFrameCount();
  }

  #noNegativeNums(number) {
    if (number < 0) {
      throw Error('Cannot input negative numbers');
    }
  }
  #newFrame() {
    if (this.#scenario(1) && this.#compareArrLength(3)) {
      return this.#incrementAndResetFrame();
    }
    if (this.#scenario(2) && this.#compareArrLength(2)) {
      return this.#incrementAndResetFrame();
    }
  }

  #incrementFrame() {
    this._frameCount++;
  }

  #resetFrameCount() {
    if (this._frameCount > this.#maxFrames) {
      this._frameCount = 1;
    }
  }

  #compareArrLength(number) {
    return this._bowls.length === number;
  }

  #incrementAndResetFrame() {
    this.#incrementFrame();
    this._bowls = [];
  }

  #scenario(choice) {
    switch (choice) {
      case 1:
        return this._frameCount === this.#maxFrames;
      case 2:
        return this._frameCount < this.#maxFrames;
    }
  }

}