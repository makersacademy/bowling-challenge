class ScoreRecord

    attr_reader :record

    def initialize
        @record = {'11': nil,'12': nil,'21': nil,'22': nil,'31': nil,'32': nil,'41': nil,'42': nil,'51': nil,'52': nil,'61': nil,'62': nil,'71': nil,'72': nil,'81': nil,'82': nil,'91': nil,'92': nil,'101': nil,'102': nil,'103': nil}
    end

    def update(id, value)
        @record[id] = value
    end

    def self.instance
        @score ||= ScoreRecord.new
    end

end  