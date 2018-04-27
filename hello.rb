require 'sinatra'
require 'httparty'

def find_restaurants(params)
	request = HTTParty.get('https://data.cityofchicago.org/resource/cwig-ma7x.json', 
		{headers: {"X-App-Token": ENV['SODA_API_KEY']},
		query: sanitized_params})
	if request.code == 200 && request.parsed_response != []
		results = format_results(request)
		return results
	else
		return "Something went wrong. Check your inputs."
	end
end

get '/' do
  erb :search
end

get	'/results' do
	@results = find_restaurants(params[:restaurant])
	erb :results
end