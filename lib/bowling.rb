class Bowling

  def initialize
    @total_score = 0
    @round = 1
    @frame_score = 0
    @strike_bonus = 0
    @strike = false
    @spare = false
    @roll = 0
  end
  
  def score(score)
    
    @frame_score += score
    
    strike if score == 10 
 
    if @spare == true
     p @total_score += score
      @spare = false
    end

    if @strike == true && @roll == 2 #@roll / @round
      @total_score += @frame_score + score
      @strike = false
      @frame_score = 0
    end

    spare if @round == 2 && @frame_score == 10
    
    @total_score += score
    
    @round += 1
    if @round == 3
      @round = 1
      @frame_score = 0
    end
    @roll += 1
    
  end

  def total_score
    @total_score
  end
  
  def strike
    puts "Strike!"
    @roll = 1
    @frame_score = 0
    @strike = true
  end

  def spare
    @spare = true 
  end

 
end