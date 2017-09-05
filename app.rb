require 'sinatra/base'

class Bowling < Sinatra::Base
enable :sessions
set :public_folder, 'public'

get '/' do
  redirect '/index.html'
end

run! if app_file == $0

end
