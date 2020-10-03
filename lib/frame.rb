class Frame
  class << self

    def count
      @count ||= 0
    end

    def increase
      @count ||= 0
      @count += 1
    end

    def final?
      Frame.count == 9
    end 
  end
end
