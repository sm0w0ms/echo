# MockAPI

A robust mock API service built with Express, featuring:
- **Logging**: JSON logging via `pino`.
- **Security**: Security headers via `helmet`.
- **CORS**: Enabled via `cors`.
- **Docker**: Containerized for easy deployment.

## Prerequisites

- Node.js 22+
- NPM

## Installation

```bash
npm install
```

## Running Locally

Start server:
```bash
node app.js
```

The server listens on port `3000`.

### Development Logging
For pretty logs during development:
```bash
node app.js | npx pino-pretty
```

## Docker

Build image:
```bash
docker build -t mockapi .
```

Run container:
```bash
docker run -p 3000:3000 mockapi
```

## Usage

### Echo Endpoint

POST `/echo`

Request:
```bash
curl -X POST http://localhost:3000/echo \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello World"}'
```

Response:
```json
{"message": "Hello World"}
```
# echo
