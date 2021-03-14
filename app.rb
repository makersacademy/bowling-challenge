require 'sinatra/base'

class Game < Sinatra::Base
  set :public_folder, proc { File.join(root, 'public') }

  get "/" do
    File.read('public/index.html')
  end
  run! if app_file == $0
end
