class Round

  attr_reader :round

  def initialize(first_bowl, second_bowl)
    @round = { first_throw: first_bowl, second_throw: second_bowl}
  end

end