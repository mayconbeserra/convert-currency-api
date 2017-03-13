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
