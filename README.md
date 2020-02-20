<<<<<<< HEAD
# RAKU
=======
# “RAKU”  
>>>>>>> f7d1bedb3c30baed2a829aaa63a2886e844fa0b8

"This was created during our time as students at Code Chrysalis."

RAKU – A dashboard designed to make you happy.

<<<<<<< HEAD
You can try this app: https://cc11raku.herokuapp.com/

=======
## URL
You can try this app.   
https://cc11raku.herokuapp.com/


>>>>>>> f7d1bedb3c30baed2a829aaa63a2886e844fa0b8
<img src="https://user-images.githubusercontent.com/56245555/74898034-0d57f480-53dc-11ea-8d63-9f8835fba1f0.png" width="400px">

## Setup Instructions

#### 1. Clone the repo:

```
git clone https://github.com/RAKUteam/RAKU.git
```

#### 2. Install packages:

```
yarn
```

#### 3. Create database:

```
echo "CREATE DATABASE roku;" | psql
```

#### 4. Migrate tables:

```
yarn migrate
```

#### 5. Configure local environment and API_KEY:

• Create a .env file to hold keys and environment variables

```
touch .env
```

• Fill .env with API keys from: https://english.api.rakuten.net/

```
API_KEY=[your API_KEY]
```

#### 6. Start server:

• Default location is: http://localhost:9000

```
yarn start
```

#### 6. Build the front end:

• Default location is: http://localhost:3000

```
yarn dev
```

• Default location is: http://localhost:9000

```
yarn build
```

## APIs Used

#### [Rakuten Rapid API](https://english.api.rakuten.net/)

• [Bing News Search](https://english.api.rakuten.net/microsoft-azure/api/bing-news-search/) <br />
• [Cat Facts](https://english.api.rakuten.net/brianiswu/api/cat-facts) <br />
• [Dad Jokes](https://english.api.rakuten.net/KegenGuyll/api/dad-jokes) <br />
• [Dark Sky ](https://english.api.rakuten.net/darkskyapis/api/dark-sky) <br />
• [Good Quotes](https://english.api.rakuten.net/fofo/api/good-quotes/endpoints) <br />
• [Microsoft Text Analysis](https://english.api.rakuten.net/microsoft-azure/api/microsoft-text-analytics/) <br />

#### Third Party APIs

<<<<<<< HEAD
• [Aztro Horoscopes](https://aztro.readthedocs.io/en/latest/) <br />
• [NASA APOD](https://api.nasa.gov/) <br />
• [sendGrid](https://sendgrid.com/docs/API_Reference/index.html) <br />
• [Spotify](https://developer.spotify.com/documentation/web-api/) <br />

## Acknowledgements

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). <br />
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). <br />
[Heroku](https://www.heroku.com/) was used to host the project. <br />
=======
## API
We used Rakuten Rapid API => https://english.api.rakuten.net/   
- cat facts https://english.api.rakuten.net/brianiswu/api/cat-facts
- dad jokes https://english.api.rakuten.net/KegenGuyll/api/dad-jokes
- bing news https://english.api.rakuten.net/microsoft-azure/api/bing-news-search/
- microsoft text analysis api https://english.api.rakuten.net/microsoft-azure/api/microsoft-text-analytics/
- good quotes https://english.api.rakuten.net/fofo/api/good-quotes/endpoints
- dark sky https://english.api.rakuten.net/darkskyapis/api/dark-sky

External APIs
- sendGrid
- spotify
- aztro (horoscopes)
- nasa
>>>>>>> f7d1bedb3c30baed2a829aaa63a2886e844fa0b8
