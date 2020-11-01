class Frame

  attr_reader :frame, :strike, :spare

  def initialize(first_bowl, second_bowl)
    @frame = { first_throw: first_bowl, second_throw: second_bowl}
    @strike = false
    @spare = false
  end

  def is_a_strike?
    @strike = true if @frame[:first_throw] == 10
    @strike
  end

  def is_a_spare?
    return @spare = false if is_a_strike? == true
    @spare = true if Calculator.new.add_frame(@frame[:first_throw], @frame[:second_throw]) == 10
    @spare
  end
end