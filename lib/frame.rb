class Frame
  attr_reader :number

  def initialize(frame_num)
    raise "Frame number must be between 1 and 10" unless frame_num.between?(1, 10)
    @number = frame_num
  end
end
