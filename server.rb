require 'sinatra'
require 'json'

before do
  content_type :json
  headers 'Access-Control-Allow-Origin' => 'http://localhost:8000',
          'Access-Control-Allow-Headers' => 'Content-Type'
end

options '/perform' do
  200
end

post '/perform' do
  payload = JSON.parse(request.env['rack.input'].read)

  { 'text' => payload['text'].upcase }.to_json
end
