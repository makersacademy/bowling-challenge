class Frame

  attr_reader :number
  

  def initialize(frame_number)
    raise 'Frame number does not exist' unless frame_number.between?(1, 10)
    @number = frame_number
  end 

end