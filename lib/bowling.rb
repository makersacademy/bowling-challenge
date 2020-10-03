class Bowling

  def initialize
    @total_score = 0
    @round = 1
    @frame_score = 0
    @strike = false
    @spare = false
  end
  
  def score(score)
    p score
    if @spare == true
      @total_score += score
      @spare = false
    end
    
    @frame_score += score
    
    spare if @round == 2 && @frame_score == 10
    
   
    strike if score == 10 
    @total_score += score
    @round += 1
    if @round == 3
    @round = 1
    @frame_score = 0
    end
  end


  def total_score
  @total_score
  end
  
  def strike
    true
  end

  def spare
    p @spare = true
    
    
  end

 
end