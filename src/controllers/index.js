const { db: lowdb, dbPromise } = require('../db');
const pickupLines = 'lines';

const roll = arr => Math.round(Math.random() * (arr.length - 1));

exports.randomLine = (req, res) => {
  dbPromise(lowdb)
    .then(
      db => (db.has(pickupLines).value() ? db.get(pickupLines).value() : {})
    )
    .then(data => {
      const keys = Object.keys(data),
        randomKeyIndex = roll(keys),
        lines = data[keys[randomKeyIndex]],
        randomLine = lines[roll(lines)];

      res.json({ body: randomLine });
    })
    .catch(err => res.status(200).send(err.message));
};

exports.lines = (req, res) => {
  dbPromise(lowdb)
    .then(
      db => (db.has(pickupLines).value() ? db.get(pickupLines).value() : {})
    )
    .then(lines => res.send(lines))
    .catch(err => res.status(200).send(err.message));
};
