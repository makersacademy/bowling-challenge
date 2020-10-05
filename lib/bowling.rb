class Bowling

  def initialize
    @total_score = 0
    @frame_score = 0
    @strike = false
    @spare = false
    @roll = 1
  end
  
  def score(pins)
    @frame_score += pins
    @roll_score = pins
    strike if pins == 10 
    calculate
  end
  
  def calculate
    spare(@frame_score)
    if @strike == true && @roll == 2 
      @total_score += @frame_score + @frame_score
      @strike = false
      @frame_score = 0
    end
    @spare = true if @roll == 2 && @frame_score == 10
    @total_score += @roll_score
    @roll += 1
    if @roll == 3
      reset_frame
    end
  end

  def reset_frame
    @roll = 1
    @frame_score = 0
  end

  def total_score
    @total_score
  end
  
  def strike
    @roll = 1
    @frame_score = 0
    @strike = true
  end

  def spare(pins)
    if @spare == true
      @total_score += pins
      @spare = false
    end
  end
end