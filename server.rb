require 'sinatra/base'
require './database_connection'
require 'json'

class BowlingScoreApp < Sinatra::Base
    
    before do
      DatabaseConnection.setup('bowlingscore')
    end

    get '/' do
    end
end

