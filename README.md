# Welcome to convert-currency-api

This API will help you to convert your currency to another one.

It's based on ECB (European Central Bank).

# Tech Stack

* NodeJS
* Express
* Babel
* Mocha
* Chai
* Sinon
* Docker
* Docker-Compose

# API

* GET
** `localhost:3000/api/v1/convert?from=USD&to=EUR&value100`
* GET
** `localhost:3000/_ping`

# How to run the tests?

* `docker-compose stop`
* `docker-compose up --remove-orphans ci`

# How to run the api?

* `docker-compose stop`
* `docker-compose up --force-recreate --remove-orphans local`
* Access: `localhost:3000/api/v1/convert?from=USD&to=EUR&value100`

# Improvements

* Working with number is a special case, mainly with money. I'd like to use another library for handling the numbers like: `https://github.com/MikeMcl/decimal.js/`
* Store the exchange rates for the day. It means the app will not have to contact the ECBService.
* Add the express validation middleware for the request
