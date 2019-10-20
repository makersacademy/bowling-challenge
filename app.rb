require 'sinatra/base'

class BowlingCard < Sinatra::Base
  get '/' do
    'Bowling Card'
  end

  run! if app_file == $0
end
