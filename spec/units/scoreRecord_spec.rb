require 'score_record'

describe ScoreRecord do
    subject { ScoreRecord.new }

    it 'creates and hash with no values on initialize' do 
        scores = [{id: '11', score: nil},
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
        expect(subject.record).to eq(scores)
    end

    describe '.find_id' do 
        it 'should find the hash based on an id' do 
            expect(subject.find_id('61')).to equal(10)
        end
    end

    describe '.update' do 
        it 'should update the score when given the score id and value' do 
            subject.update('11', 7)
            expect(subject.record[0][:score]).to eq(7)
        end
    end

    describe '.instance' do 
        it 'should return the instance of ScoreRecord or make a new one' do 
            scores = [{id: '11', score: nil},
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
            score_record = ScoreRecord.instance
            expect(score_record.record).to eq(scores)
        end
    end


end