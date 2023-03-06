const express = require('express');

const app = express();

const PORT = 5001;

app.get('/', (req, res) => {
  res.send('This is project A');
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
