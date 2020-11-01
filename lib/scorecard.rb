class Scorecard

  attr_reader :round_score, :rounds

  def initialize
    @round_score = 0
    @rounds = []
  end

  def score(pins)
    @round_score += pins
  end

  def score_round(round)
    @rounds.push(round)
  end

end