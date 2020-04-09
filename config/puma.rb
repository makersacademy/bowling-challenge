# vars
app_dir = File.expand_path("../..", __FILE__)
shared_dir = "#{app_dir}/shared"

# Specifies the `environment` that Puma will run in.
environment ENV.fetch("RACK_ENV") { "production" }

# pidfile and state
pidfile "#{shared_dir}/pids/puma.pid"
state_path "#{shared_dir}/pids/puma.state"

# Threads for serving requests
threads 1, 16

# Workers (cpu cores)
workers ENV.fetch("WEB_CONCURRENCY") { 1 }
preload_app!

# Unix socket to for nginix reverse proxy
bind "unix://#{shared_dir}/sockets/puma.sock"

# Port for local server use
# port ENV.fetch("PORT") { 3000 }

# Debugging
debug

# Logging
stdout_redirect "#{shared_dir}/log/puma.stdout.log", "#{shared_dir}/log/puma.stderr.log", true

activate_control_app

rackup "#{app_dir}/config.ru"