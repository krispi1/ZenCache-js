# ZenCache-js

###### Key endpoints:

|Operation|Method|Endpoint|
|--------|--------|--------|
|Create entry|POST|http://localhost:4000/cache|
|Fetch item (place key in body e.g. { "key": "country" })|GET|http://localhost:4000/cache|
|Delete item|DELETE|http://localhost:4000/cache/del/:key|

###### Extra endpoints:

|Operation|Method|Endpoint|
|--------|--------|--------|
|Fetch keys|GET|http://localhost:4000/cache/keys|
|Fetch values|GET|http://localhost:4000/cache/values|
|Fetch entries|GET|http://localhost:4000/cache/entries|
|Fetch size|GET|http://localhost:4000/cache/size|
|Fetch stats|GET|http://localhost:4000/cache/stats|
|Delete all|DELETE|http://localhost:4000/cache/clear|

##### Installation
```bash
git clone https://github.com/krispi1/ZenCache-js.git
```
```bash
cd ZenCache-js
```
```bash
npm install or yarn 
```
```bash
npm start or yarn start
```

##### Run tests
```bash
npm test or yarn test
```
