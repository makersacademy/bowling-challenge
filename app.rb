require 'sinatra/base'
require 'json'

class App < Sinatra::Base

get '/' do
  File.read(File.join('public', 'view.html'))
end

get '/score' do
  session[:score] = params[:score]
end

  run! if app_file == $0

end
