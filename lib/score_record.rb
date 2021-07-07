class ScoreRecord

    attr_reader :record

    def initialize
        @record = [{id: '11', score: nil},
            {id:'12', score: nil},
            {id: '21', score: nil},
            {id: '22', score: nil},
            {id: '31', score: nil},
            {id: '32', score: nil},
            {id: '41', score: nil},
            {id: '42', score: nil},
            {id: '51', score: nil},
            {id: '52', score: nil},
            {id: '61', score: nil},
            {id: '62', score: nil},
            {id: '71', score: nil},
            {id: '72', score: nil},
            {id: '81', score: nil},
            {id: '82', score: nil},
            {id: '91', score: nil},
            {id: '92', score: nil},
            {id: '101', score: nil},
            {id: '102', score: nil},
            {id: '103', score: nil}]
    end

    def update(id, value)
        index = find_id(id)
        @record[index][:score] = value.to_i
    end

    def find_id(id)
        @record.index { |i| i[:id] == id }
    end

    def self.instance
        @score ||= self.new
    end

    def total
        @totals = []
        i = 0
        loop do
            if @record[i][:score].nil?
                @totals.push(0)
            elsif i == 18 
                @totals.push(last_frame_total)
            elsif @record[i][:score] > 10
                @totals.push(@record[i][:score])
            elsif @record[i + 1][:score].nil?
                @totals.push(0)
            else
                @totals.push(@record[i][:score] + @record[i+1][:score])
            end
            i += 2
            break if i >= 20
        end
        @totals
    end

    def last_frame_total
        if !!@record[19][:score] && !!@record[20][:score]
            return @record[18][:score] + @record[19][:score] + @record[20][:score]
        elsif !@record[19][:score] && !!@record[20][:score]
            return @record[18][:score] + @record[20][:score]
        elsif !!@record[19][:score] && !@record[20][:score]
            return @record[18][:score] + @record[19][:score]
        else
            return @record[18][:score]
        end
    end

    def self.newgame
        @score = nil
    end

end  