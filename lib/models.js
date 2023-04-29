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

  string_rep(score) {
    if (score[0] == 10) {
      this.str_rep = ["", "X"]
    } else if (score.sum == 10) {
      this.str_rep = [score[0].toString(), "/"]
    } else {
      for (let i = 0; i < score.length; i++) {
        this.str_rep.push(score[i].toString());
      }
    }
  }

  frame_total() {
    let rolls_total = 0;
    this.frame.forEach( roll => rolls_total += roll )
    return rolls_total
  }
}

class ScoreCard {
  constructor() {
    this.frames = []
    this.frame_bonuses = []
  }

  add_frame(frame) {
    this.frames.push(frame)
  }

  current_score() {
    let frames_total = 0
    this.frames.forEach( frame => frames_total += sum_arr(frame.score) )
    this.gen_bonuses()
    console.log(`This is the frame bunus ${this.frame_bonuses}`)
    let result = frames_total + sum_arr(this.frame_bonuses);
    return result
  }

  gen_bonuses() {
    //clearing in case of repeated calls - funct (and program) depend on poisitioning bonuses in relation to frame index
    this.frame_bonuses = []
    console.log(`frames length ${sum_arr(this.frames[0].score)}`)
    for (let i = 0; i < this.frames.length; i++) {
      if (this.frames[i].score[0] == 10) {
        // check if this frame is the current last one in the game. If so, no bonus can be applied
        if (this.frames[i+1] == null && this.frames[i].frame_num != 9) {
        }
        // if it is frame 9, push the first two rolls from the 10 frame
        else if (this.frames[i].frame_num == 9) {
          this.frame_bonuses.push(sum_arr(this.frames[i+1].score.slice(0, 2)))
          break
        }
        // if the next frame is a strike and there are 2 frames ahead, push the strike and first roll from next frame
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


/*

  def current_score
    frames_total = 0
    @frames.each { |frame| frames_total += frame.score.sum }
    self.gen_bonuses
    return frames_total + @frame_bonuses.sum
  end

  def gen_bonuses
    @frame_bonuses = []
    for i in 0...9
      if @frames[i].score[0] == 10
        if @frames[i+1] == null and @frames[i].frame_num != 9
          return null
        elsif @frames[i].frame_num == 9
          @frame_bonuses.push(@frames[i+1].score[0..1].sum)
          return null
        elsif @frames[i+1].score[0] == 10 && @frames[i+2] != null
          @frame_bonuses.push(10+@frames[i+2].score[0])
        else
          @frame_bonuses.push(@frames[i+1].score.sum)
        end
      elsif @frames[i].score.sum == 10
        frame_bonuses.push(@frames[i+1].score[0])
      else
        frame_bonuses.push(0)
      end
    end  
  end 
end

  */