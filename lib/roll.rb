class Roll

  attr_reader :pins

  def pins_hit(pins)
    @pins = pins
  end

  def strike?
    @pins == 10
  end

  def spare?(first_roll)
    if @pins + first_roll > 10
      raise("You are cheating")
    end
    @pins + first_roll == 10
  end

end
