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

end  