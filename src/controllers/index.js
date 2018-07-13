const { db: lowdb, dbPromise } = require('../db');
const pickupLines = 'data';

const roll = arr => Math.round(Math.random() * (arr.length - 1));

exports.randomLine = (req, res) => {
  dbPromise(lowdb)
    .then(
      db => (db.has(pickupLines).value() ? db.get(pickupLines).value() : {})
    )
    .then(data => {
      randomLine = data[roll(data)];

      res.json({ data: randomLine });
    })
    .catch(err => res.status(200).send(err.message));
};

exports.lines = (req, res) => {
  dbPromise(lowdb)
    .then(
      db => (db.has(pickupLines).value() ? db.get(pickupLines).value() : {})
    )
    .then(lines => res.status(200).send({ data: lines }))
    .catch(err => res.status(200).send(err.message));
};
