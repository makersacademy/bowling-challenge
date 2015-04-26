require 'sinatra'

set :public_folder, proc { File.join(root) }

get '/' do
  redirect to '/SpecRunner.html'
end
