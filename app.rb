require_relative '/lib/score_record'
require 'sinatra/base'
require 'json'

class Bowling < Sinatra::Base 

    get '/' do 
        File.read(index.html)
    end

    get '/score' do 
        bowling = Bowling.instance
        { bowling.record }.to_json
    end 

    post '/score' do 
        bowling = Bowling.instance
        bowling.update(params[:id], params[:value])
        { status: 200 }.to_json
    end

end