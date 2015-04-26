class Frame
  attr_reader :pins, :is_over, :strike, :spare, :score, :roll_array

  def initialize
    @pins = 10
    @rolls = 0
    @is_over = false
    @strike = false
    @spare = false
    @score = 0
    @roll_array = []
  end

  def first_roll
    @roll_array[0]
  end

  def roll(hit)
    @pins -= hit
    @rolls += 1
    @roll_array << hit unless @is_over
    check_if_frame_over
  end

  def check_if_frame_over
    if @rolls == 2
      @is_over = true
      @spare = true if @pins == 0
    end
    if @pins == 0 && @rolls == 1
      @is_over = true
      @strike = true
    end
    @score = 10 - @pins
  end
end
