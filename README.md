# CORS and Sinatra

## Setup

Install sinatra.

```
gem install sinatra
```

## Run

Run the first server.
```
ruby -run -ehttpd ./origin -p 8000
```

Run the second server.
```
ruby server.rb -p 8001
```

Open ``http://localhost:8000/`` in the browser.
