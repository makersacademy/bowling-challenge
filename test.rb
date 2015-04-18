
class Roll
  attr_reader :strike, :score
  def initialize(pins)
    if pins == 10
      @strike = true
    end
    @score = pins
  end
end

class Frame
  attr_accessor :score, :split, :strike, :r1
  def initialize(r1,r2)
    @r1 = r1
    p r1.score, r2.score
    @score = r1.score + r2.score
    @score == 10 && !r1.strike ? @split = true : @split = false
    @strike = r1.strike
  end
end


class SetFrames
  attr_reader :frames

  def initialize rolls
    @frames = []
    set_frames rolls
  end

  def set_frames rolls
    curr_roll = rolls.shift
    # strike
    if curr_roll.strike == true
      @frames << (Frame.new(curr_roll, Roll.new(0)))
    else
    # wait for next roll
     @frames << Frame.new(curr_roll, rolls.shift)
   end

    if rolls.size > 0
      set_frames rolls
    else
      p @frames
    end
  end

end

class ScoreFrames
  def initialize frames
    @score = 0

    frames.each_with_index do |frame, i|
      if frame.strike == true
        frame.score += frames[i + 1].score
      elsif frame.split == true
         frame.score += frames[i + 1].r1.score
      else
      end
    end
    frames.each do |frame|
      @score += frame.score
    end
    p @score
  end

end


class Game

  def initialize(total_pins = [])
    rolls = []
    p total_pins
    total_pins.each do |pins|
      roll = Roll.new(pins)
      rolls << roll
    end
    frames = SetFrames.new rolls
    p ScoreFrames.new frames.frames
  end

end