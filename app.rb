require 'sinatra/base'

class Bowling < Sinatra::Base
  get '/' do
    File.read('public/index.html')
  end
  run! if app_file == $0
end
