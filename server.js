const express = require('express'),
  bodyParser = require('body-parser'),
  router = require('./src/router'),
  PORT = process.env.PORT || 8888;

const app = express();

// register middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

const server = app.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Server listening on http://${host}:${port}`);
});
