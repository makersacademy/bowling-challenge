
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
  attr_accessor :score, :split, :strike, :r1, :id
  def initialize(r1,r2)
    @r1 = r1
    @score = r1.score + r2.score
    @score == 10 && !r1.strike ? @split = true : @split = false
    @strike = r1.strike
  end
end


class SetFrames
  attr_reader :frames

  def initialize rolls
    @id = 0
    @frames = []
    set_frames rolls
  end

  def set_frames rolls
    @id += 1
    curr_roll = rolls.shift
    # strike
    if curr_roll.strike == true
      new_frame =  (Frame.new(curr_roll, Roll.new(0)))
      new_frame.id = @id
      @frames << new_frame
    else
    # wait for next roll
     @frames << Frame.new(curr_roll, rolls.shift)
   end

    if rolls.size > 0
      set_frames rolls
    end
  end

end

class ScoreFrames
  attr_reader :updatedframes
  def initialize frames
    @updatedframes = []
    update_scores frames
    @frames = frames
    @updatedframes.each do |frame|
      puts "frame #{frame.id}  has score #{frame.score}"
    end

  end

  def update_scores frames
  #quite good approach, works for 3 strikes
    curr_frame = frames.shift
    if curr_frame.strike
      p curr_frame.score
      curr_frame.score += (update_scores frames).score
    end
    if curr_frame.split
      curr_frame.score += (update_scores frames).r1.score
    end
    @updatedframes << curr_frame
    if curr_frame.score > 30
      curr_frame.score = 30
    end
      curr_frame
  end
  # if strike
  # current frames score += next frames score


end

class TotalScore
  def initialize frames
    @score = 0
    score frames
  end

  def score frames
    frames.reverse.each do |frame|
      @score += frame.score
      # puts "frame score = #{frame.score}"
      puts "frame #{frame.id}'s score = #{frame.score}   total score = #{@score}"
    end
  end
end


class Game

  def initialize(total_pins = [])
    rolls = []
    total_pins.each do |pins|
      roll = Roll.new(pins)
      rolls << roll
    end
    frames = SetFrames.new rolls
    udf = ScoreFrames.new frames.frames
    TotalScore.new udf.updatedframes
  end

end