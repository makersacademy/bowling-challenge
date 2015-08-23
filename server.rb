require 'sinatra'

enable :sessions
set :session_secret, "roof dog"

set :public_folder, proc { File.join(root) }

get '/' do
  "Scorecards r us"
end
