class Frame
  attr_reader :rolls

  def initialize
    @rolls = 0
    @pins = 10
    @score = 0
    @following_frame_rolls = []
  end

  def add_roll(pins_felled)
    raise "You have already finished this frame" if @rolls >= 2 || @pins == 0
    raise "You cannot down more pins than available" if pins_felled > @pins
    raise "You cannot fell fewer pins than 0" if pins_felled < 0
    @rolls += 1
    @pins -= pins_felled
    @score += pins_felled
  end

  def frame_score
    if !frame_completed?
      return 0
    end

    if !is_strike? && !is_spare?
      return @score
    end
    if is_strike?
      if @following_frame_rolls.length < 2
        return 0
      end
      return @score + @following_frame_rolls.sum
    end

    if is_spare?
      if @following_frame_rolls.length < 1
        return 0
      end
      return @score + @following_frame_rolls[0]
    end
  end

  def add_following_frame_roll(pins_felled)
    if @following_frame_rolls.length >= 2
      return
    end

    raise "You cannot fell more pins than 10" if pins_felled > 10
    raise "You cannot fell fewer pins than 0" if pins_felled < 0

    if @following_frame_rolls.length == 1 && @following_frame_rolls[0] < 10 && @following_frame_rolls[0] + pins_felled > 10
      raise "You can only fell 10 pins in a frame"
    end

    @following_frame_rolls << pins_felled
  end

  def is_spare?
    return @rolls == 2 && @pins == 0
  end

  def is_strike?
    return @rolls == 1 && @pins == 0
  end

  def frame_completed?
    return @pins == 0 || @rolls == 2
  end
end
