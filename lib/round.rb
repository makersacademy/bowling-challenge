class Round

  attr_reader :round, :strike, :spare

  def initialize(first_bowl, second_bowl)
    @round = { first_throw: first_bowl, second_throw: second_bowl}
    @strike = false
    @spare = false
  end

  def is_a_strike?
    @strike = true if @round[:first_throw] == 10
    @strike
  end

  def is_a_spare?
    return @spare = false if is_a_strike? == true
    @spare = true if Calculator.new.add_round(@round[:first_throw], @round[:second_throw]) == 10
    @spare
  end
end