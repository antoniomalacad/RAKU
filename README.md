# RAKU

This was created during our time as students at Code Chrysalis.

**RAKU** – A dashboard designed to make you happy.

You can try the app here: https://cc11raku.herokuapp.com/

<img src="https://user-images.githubusercontent.com/37863665/75003374-ddc3ed80-54aa-11ea-92d7-3f5606a1fb5b.png" width="400px">

# Introducing the Team

### Mary Sedarous (Team Lead, Engineer)

[Github](https://github.com/marysed) | [LinkedIn](https://linkedin.com/in/marysedarous/)

### Sarah Ting (Engineer)

[Github](https://github.com/sarahjting) | [LinkedIn](https://www.linkedin.com/in/sarahjting/)

### Antonio Malacad (Scrum Master, Engineer)

[Github](https://github.com/antoniomalacad) | [LinkedIn](https://linkedin.com/in/antonio-malacad/)

### Kota Aoyama (Tech Lead, Engineer)

[Github](https://github.com/KotaAoyama) | [LinkedIn](https://linkedin.com/in/kota-aoyama/)

### Haruna Utsumi (Engineer)

[Github](https://github.com/harunamarun) | [LinkedIn](linkedin.com/in/harunamarun/)

# Setup Instructions

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
echo "CREATE DATABASE raku;" | psql
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

• Add your API keys from: https://english.api.rakuten.net/ and external services to your .env file.

```
API_KEY=[your API key]
REACT_APP_NASA_API_KEY = [your API key from NASA]
CLIENT_ID = [your Spotify developer key]
CLIENT_SECRET = [your Spotify developer secret key]
SEND_GRID_API_KEY = [your SendGrid API key]
```

• Add your database URL, Name, Username, and Password to the .env file.

```
DATABASE_URL=[your database URL]
DB_NAME = [your database name]
DB_USER = [your database username]
DB_PASSWORD = [your database password]
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

# APIs Used

## [Rakuten Rapid API](https://english.api.rakuten.net/)

• [Bing News Search](https://english.api.rakuten.net/microsoft-azure/api/bing-news-search/) <br />
• [Cat Facts](https://english.api.rakuten.net/brianiswu/api/cat-facts) <br />
• [Dad Jokes](https://english.api.rakuten.net/KegenGuyll/api/dad-jokes) <br />
• [Dark Sky ](https://english.api.rakuten.net/darkskyapis/api/dark-sky) <br />
• [Good Quotes](https://english.api.rakuten.net/fofo/api/good-quotes/endpoints) <br />
• [Microsoft Text Analysis](https://english.api.rakuten.net/microsoft-azure/api/microsoft-text-analytics/) <br />

## Third Party APIs

• [Aztro Horoscopes](https://aztro.readthedocs.io/en/latest/) <br />
• [NASA APOD](https://api.nasa.gov/) <br />
• [SendGrid](https://sendgrid.com/docs/API_Reference/index.html) <br />
• [Spotify](https://developer.spotify.com/documentation/web-api/) <br />

# Acknowledgements

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). <br />
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). <br />
[Heroku](https://www.heroku.com/) was used to host the project. <br />
