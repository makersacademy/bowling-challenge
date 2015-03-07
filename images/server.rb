require 'cuba'
require 'cuba/render'
require 'erb'

Cuba.plugin(Cuba::Render)
Cuba.settings[:render][:template_engine] = "erb"
Cuba.use Rack::Static, root: "public", urls: ["/javascripts", "/styles"]

Cuba.define do

  on get do
    on root do
      res.write view("index")
    end
  end

end


