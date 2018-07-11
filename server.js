const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  router = require('./src/router'),
  PORT = process.env.PORT || 8888;

const app = express();

// register middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

const server = app.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Server listening on http://${host}:${port}`);
});
