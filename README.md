# [Strapi](https://github.com/strapi/strapi) containerized

![Strapi](https://cldup.com/7umchwdUBh.png)

API creation made simple, secure and fast.
The most advanced open-source Content Management Framework to build powerful API with no effort.

***

[![Travis](https://img.shields.io/travis/strapi/strapi-docker.svg?style=for-the-badge)](https://travis-ci.org/strapi/strapi-docker)
[![GitHub release](https://img.shields.io/github/release/strapi/strapi-docker.svg?style=for-the-badge)](https://github.com/strapi/strapi-docker/releases)
[![Docker Pulls](https://img.shields.io/docker/pulls/strapi/strapi.svg?style=for-the-badge)](https://hub.docker.com/r/strapi/strapi)

## Imagen de STRAPI modificada para utilizar en Kubernetes

## Environment variables

- `APP_NAME` to override the `strapi-app` generated folder name (you should also update the volumes paths).
- `DATABASE_CLIENT` a database providers supported by Strapi: MongoDB, Postgres, MySQL, Sqlite3 and Redis.
- `DATABASE_HOST` database service name.
- `DATABASE_PORT` depends on your database client.
- `DATABASE_NAME` initializes a database with specific name (default strapi). When using MongoDB, you should also update the `MONGO_INITDB_DATABASE` environment in the db service.
- `DATABASE_USERNAME` set the username of the database connection.
- `DATABASE_PASSWORD` set the password of the database connection.
- `DATABASE_SRV` boolean for SRV.
- `DATABASE_SSL` boolean for SSL.
- `DATABASE_AUTHENTICATION_DATABASE` set the authentification.
