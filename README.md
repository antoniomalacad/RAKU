# RAKU

"This was created during our time as students at Code Chrysalis."

RAKU – A dashboard designed to make you happy.

You can try this app: https://cc11raku.herokuapp.com/

<img src="https://user-images.githubusercontent.com/37863665/75003374-ddc3ed80-54aa-11ea-92d7-3f5606a1fb5b.png" width="400px">

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

#### 7. Build the front end:

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

• [Aztro Horoscopes](https://aztro.readthedocs.io/en/latest/) <br />
• [NASA APOD](https://api.nasa.gov/) <br />
• [SendGrid](https://sendgrid.com/docs/API_Reference/index.html) <br />
• [Spotify](https://developer.spotify.com/documentation/web-api/) <br />

## Acknowledgements

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). <br />
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). <br />
[Heroku](https://www.heroku.com/) was used to host the project. <br />
