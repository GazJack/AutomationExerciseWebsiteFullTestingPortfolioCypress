const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Serveris pradėjo darbą');
});

app.listen(PORT, () => {
  console.log('\x1b[32m%s\x1b[0m', `Serveris paleistas ant ${PORT} porto`);
});
