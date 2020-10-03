class Bowling

  def initialize
  @total_score = 0
  @round = 1
  end
  
  def score(score)

    strike if score == 10 
    @total_score += score
  end


  def total_score
  @total_score
  end
  
  def strike
    true
  end
end