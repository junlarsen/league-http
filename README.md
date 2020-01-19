# League HTTP

A minimal http client for the League of Legends Client APIs for the commandline.

**Usage**

The command can be executed via `npx`.

```
npx league-http GET /lol-summoner/v1/current-summoner
```

Or alternatively, installed globally via NPM.

```
npm i -g league-http
```

**Manual**

```
lolhttp [Method] [Endpoint] [Body?]
```

- *Method*: Any of "GET", "POST", "PUT", "PATCH" or "DELETE"
- *Endpoint*: The local url to the endpoint
- *Body*: A piece of json to be sent with the request. Do not use for GET requests.