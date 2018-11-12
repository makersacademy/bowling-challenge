require 'sinatra/base'

class Bowling < Sinatra::Base
  enable :sessions

  @scores = []
  get '/' do
    # how to get the session back into the start of the interface file?
@total = session[:total]


    erb :index
  end

  post '/save-score' do
    session[:total] = params[:total]
    session[:scores] = params[:scores]
    session[:roll] = params[:roll]

  end

  get '/get-scores' do
     # p JSON.pretty_generate(params[:scores])
     p JSON.pretty_generate("hello")
  end
  #
  # get '/get-rolls' do
  #      JSON.pretty_generate(@rolls)
  # end
end
