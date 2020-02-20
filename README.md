# “RAKU”  

"This was created during our time as students at Code Chrysalis."  
  
This app provides your positive happy life. 


## URL
You can try this app.   
https://cc11raku.herokuapp.com/


<img src="https://user-images.githubusercontent.com/56245555/74898034-0d57f480-53dc-11ea-8d63-9f8835fba1f0.png" width="400px">

## Setup Instructions
#### Clone the repo:
```
git clone https://github.com/RAKUteam/RAKU.git
```

#### Install packages:
```
yarn
```

#### Create database:
• We have a migrate file now. 
```
yarn migrate
```
#### set your API_KEY:
•You can get it in https://english.api.rakuten.net/   
•You create `.env` file.   
•You add this.
```
API_KEY=[your API_KEY]
```

#### Build the front end:
```
yarn build
```

#### Start server:
```
yarn start
```


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
