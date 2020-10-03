class Roll
  class << self

    def pins_hit(pins)
      @pins = pins
    end

    def strike?
      @pins == 10
    end
  end
end
