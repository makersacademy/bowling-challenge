const sum_arr = require('./helpers');

class Frame {
  constructor(frame_num, score=[]) {
    this.frame_num = frame_num
    this.score = score
    this.str_rep = []
    this.message = ""
  }

  add_roll(roll_score) {
    this.score.push(roll_score);
  }

  gen_string_rep() {
    if (this.score[0] == 10) {
      this.str_rep = ["", "X"]
    } else if (sum_arr(this.score) == 10) {
      this.str_rep = [this.score[0].toString(), "/"]
    } else {
      /*
      for (let i = 0; i < this.score.length-1; i++) {
        this.str_rep.push(this.score[i].toString());
      */
      this.score.forEach(score => this.str_rep.push(score))
    }
  }
}

class ScoreCard {
  constructor(frames = [], rolling_score = []) {
    this.frames = frames
    this.frame_bonuses = []
    this.rolling_score = rolling_score
  }

  add_frame(frame) {
    this.frames.push(frame)
  }

  current_score(frame = 10) {
    let frame_splice;
    if (frame != 10) {
      frame_splice = this.frames.slice(0, frame)
    } else {
      frame_splice = this.frames
    }
    let frames_total = 0
    frame_splice.forEach( frame => frames_total += sum_arr(frame.score) )
    this.gen_bonuses(frame_splice.length)
    let result = frames_total + sum_arr(this.frame_bonuses);
    return result
  }

  gen_bonuses(frame = 10) {
    // clearing in case of repeated calls - funct (and programme)
    // depend on poisitioning bonuses in relation to frame index

    this.frame_bonuses = []
    for (let i = 0; i < frame; i++) {
      if (this.frames[i].score[0] == 10) {
        // check if this frame is the current last one in the game.
        // If so, no bonus can be applied
        if (this.frames[i+1] == null && this.frames[i].frame_num != 9) {
        }
        // if it is frame 9, push the first two rolls from the 10 frame
        // unless frame 10 hasn't been rolled
        else if (this.frames[i].frame_num == 9) {
          if (this.frames[i+1] == null) {
            break
          } else {
            this.frame_bonuses.push(sum_arr(this.frames[i+1].score.slice(0, 2)))
            break
          }

        }
        // if the next frame is a strike and there are 2 frames ahead, push the
        // strike and first roll from next frame
        else if (this.frames[i+1].score[0] == 10 && this.frames[i+2] != null ) {
          this.frame_bonuses.push(10 + this.frames[i+2].score[0])
        } else {
          this.frame_bonuses.push(sum_arr(this.frames[i+1].score))
        }
      // in case of spaare
      } else if (sum_arr(this.frames[i].score) == 10 && this.frames[i+1] != null) {
        this.frame_bonuses.push(this.frames[i+1].score[0])
      } else {
        this.frame_bonuses.push(0)
      }
    }
  }
}

module.exports.Frame = Frame;
module.exports.ScoreCard = ScoreCard;