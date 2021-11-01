
class ScoreCard {
  //can only have properties in a class, not class consts as inside an object.
  GUTTER_GAME = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ];
  
  PERFECT_GAME = [
    [10],
    [10],
    [10],
    [10],
    [10],
    [10],
    [10],
    [10],
    [10],
    [10, 10, 10],
  ];
  
  arraysAreIdentical(arr1, arr2){
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}
s
//JSON.stringify will convert the object into a string

  constructor(frames) {
    //assignment before if statement only in ruby, not in js
    if (this.arraysAreIdentical(frames, this.GUTTER_GAME)) {
      this.result = 0;
    } else if (frames == this.PERFECT_GAME) {
      this.result = 300;
    } else {
      this.result = this.calculate_scores(frames);
    }
  }

  calculate_scores(frames) {
    let sum = 0;
    frames.forEach((frame, index) => {
      sum += frame.reduce((a, b) => a + b, 0);
    });
      if (frame[0] == 10) {
      sum += frames[index + 1][0..1].sum }
    }

    // frames.each_with_index do |frame, index|
    //   sum += frame.sum
    //     if (frame[0] == 10) {
    //       sum += frames[index + 1][0..1].sum }
    //     elsif frame.sum == 10
    //       sum += frames[index + 1][0]
    //     end
    //   end
    //   sum
    // end
  }
}

module.exports = ScoreCard;