const express = require('express');

const app = express();

const PORT = 5001;

app.get('/project-A', (req, res) => {
  console.log('>>> GET /project-A');
  res.send('This is project A');
});

app.get('/project-A/details', (req, res) => {
  console.log('>>> GET /project-A/details');
  res.send('Details of project A');
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
