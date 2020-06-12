require 'score_record'

describe ScoreRecord do
    subject { ScoreRecord.new }

    it 'creates and hash with no values on initialize' do 
        scores = {'11': nil,'12': nil,'21': nil,'22': nil,'31': nil,'32': nil,'41': nil,'42': nil,'51': nil,'52': nil,'61': nil,'62': nil,'71': nil,'72': nil,'81': nil,'82': nil,'91': nil,'92': nil,'101': nil,'102': nil,'103': nil}
        expect(subject.record).to eq(scores)
    end

    describe '.update' do 
        it 'should update the score when given the score id and value' do 
            subject.update('11', 7)
            expect(subject.record['11']).to eq(7)
        end
    end

    describe '.instance' do 
        it 'should return the instance of ScoreRecord or make a new one' do 
            scores = {'11': nil,'12': nil,'21': nil,'22': nil,'31': nil,'32': nil,'41': nil,'42': nil,'51': nil,'52': nil,'61': nil,'62': nil,'71': nil,'72': nil,'81': nil,'82': nil,'91': nil,'92': nil,'101': nil,'102': nil,'103': nil}
            score_record = ScoreRecord.instance
            expect(score_record.record).to eq(scores)
        end
    end


end