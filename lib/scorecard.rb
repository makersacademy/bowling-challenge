class Scorecard

  attr_reader :round_score, :rounds, :total

  def initialize
    @round_score = 0
    @rounds = []
    @total = 0
  end

  def score(pins)
    @round_score += pins
  end

  def score_round(round)
    @rounds.push(round)
    sum_total
  end

private

  def sum_total
    @total = 0
    @rounds.each do |round|
      @total += Calculator.new.add_round(round.round[:first_throw], round.round[:second_throw])
    end
  end

end