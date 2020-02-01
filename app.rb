require 'sinatra/base'
require 'json'

class App < Sinatra::Base

get '/' do
  File.read(File.join('public', 'interface.html'))
end

  run! if app_file == $0

end
