class Frame
  def initialize(roll_one, roll_two, roll_three)
    @frame_points = []
    add_points(roll_one, roll_two, roll_three)
  end

  def add_points(roll_one, roll_two, roll_three)
    @frame_points << roll_one
    @frame_points << roll_two
    @frame_points << roll_three
  end

  def frame_points
    return @frame_points
  end

  def strike?
    @frame_points[0] == 10
  end

  def spare?
    @frame_points[0] != 10 && @frame_points.sum == 10
  end
end