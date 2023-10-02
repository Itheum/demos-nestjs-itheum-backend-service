# NestJS Itheum Backend Service

## Description

This project is a simple backend service built using the popular Node.js framework called NestJS. It uses the Itheum SDK to expose an endpoint where the user can send a query paremeter specifying "mainnet" or "devnet". The service will then return the first 10 offers available on the Data NFT Marketplace for the specified network.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running test suites

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Accessing the Swagger interface

While the application is running, go to http://localhost:3000/api
![screencapture-localhost-3000-api-2023-10-02-15_34_41](https://github.com/Itheum/demos-nestjs-itheum-backend-service/assets/44813558/972c0368-356c-4b93-b944-7838230b2d1b)
