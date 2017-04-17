require 'sinatra/base'

class Bowling < Sinatra::Base

get '/' do 
  erb :bowling
end

end