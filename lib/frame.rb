class Frame
  
  attr_accessor :id, :round_number, :round_score

  def initialize(id:, round_number:, round_score:)
    @id = id
    @round_number = round_number
    @round_score = round_score
  end

end
