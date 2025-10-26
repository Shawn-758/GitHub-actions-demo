// index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! This is the CI/CD pipeline test.');
});

app.get('/api', (req, res) => {
  res.json({ message: 'GitHub Actions deployment successful!' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});