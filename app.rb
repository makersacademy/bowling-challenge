require 'json'
require_relative 'lib/score_record'
require 'sinatra/base'

class Bowling < Sinatra::Base 

    get '/' do 
        File.read('public/index.html')
    end

    get "/score" do 
        bowling = ScoreRecord.instance
        { bowling: bowling.record }.to_json
    end 

    post "/score" do 
        bowling = ScoreRecord.instance
        bowling.update(params[:id], params[:value])
        { status: 200 }.to_json
    end

    run! if app_file == $0

end