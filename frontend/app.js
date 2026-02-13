var express = require('express');
var app = express();

app.set('view engine', 'ejs');

const URL =process.env.BACKEND_URL || 'http://localhost:8000/api';

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

app.get('/', async function (req, res) {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    console.log(data); // optional: for debugging

    res.render('index', { data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Internal Server Error.' });
  }
});

app.listen(3000, function () {
  console.log('Ares listening on port 3000!');
});
