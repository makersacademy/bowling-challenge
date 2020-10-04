class Frame
  attr_reader :number, :rolls

  def initialize(frame_num)
    raise "Frame number must be between 1 and 10" unless frame_num.between?(1, 10)
    @number = frame_num
    @rolls = []
  end

  def add_roll(roll)
    unless tenth_frame? && ( spare? || strike? || double_strike? )
      raise "No more rolls, already had 2." if num_rolls >= 2
      raise "No more rolls, already bowled 10 pins." if total_pins >= 10
      raise "Invalid roll, cannot bowl more than 10 pins in this frame." if total_pins + roll.pins > 10
    end
    @rolls << roll
  end

  def complete?
    return false if num_rolls < 2 && total_pins < 10
    return false if tenth_frame? && ( spare? || strike? || double_strike? )
    true
  end

  def num_rolls
    @rolls.count
  end

  def total_pins
    @rolls.reduce(0) { |sum, num| sum + num.pins }
  end

  def score(frame_n1 = nil, frame_n2 = nil)
    return false if !complete?
    bonus = 0
    bonus = spare_bonus(frame_n1) if spare?
    bonus = strike_bonus(frame_n1, frame_n2) if strike?
    return false if bonus == false
    total_pins + bonus
  end

  private

  def spare?
    num_rolls == 2 && total_pins == 10
  end

  def strike?
    num_rolls == 1 && total_pins == 10
  end

  def double_strike?
    num_rolls == 2 && total_pins == 20
  end

  def spare_bonus(frame_n1)
    return false if frame_n1.nil? || frame_n1.num_rolls < 1
    frame_n1.rolls[0].pins
  end

  def strike_bonus(frame_n1, frame_n2)
    next_rolls = []
    [frame_n1, frame_n2].each do |frame|
      return false if frame.nil?
      next_rolls += frame.rolls
      break if next_rolls.count >= 2
    end
    next_rolls.count >= 2 ?
      next_rolls[0].pins + next_rolls[1].pins : false
  end

  def tenth_frame?
    @number == 10
  end
end

