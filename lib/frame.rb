class Frame
  attr_reader :rolls

  def initialize
    @rolls = 0
    @pins = 10
    @score = 0
  end

  def add_roll(pins_felled)
    raise "You have already finished this frame" if @rolls >= 2 || @pins == 0
    raise "You cannot down more pins than available" if pins_felled > @pins
    @rolls += 1
    @pins -= pins_felled
    @score += pins_felled
  end

  def is_spare?
    return @rolls == 2 && @pins == 0
  end

  def is_strike?
    return @rolls == 1 && @pins == 0
  end
end
