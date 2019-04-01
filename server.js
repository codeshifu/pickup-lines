const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pingmydyno = require('pingmydyno');

const router = require('./src/router');

const PORT = process.env.PORT || 8888;

const app = express();

// register middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

app.get('/', (req, res) => {
  res.send(
    `<p>Hello, world! Seems you need some/a pickup line(s). Get all <a href="/api">pickup lines</a> or a <a href="/api/random">random line</a></p>`
  );
});

const server = app.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;
  
  console.log(`Server listening on http://${host}:${port}`);
  
  pingmydyno('https://pickup-lines.herokuapp.com/api');
});
