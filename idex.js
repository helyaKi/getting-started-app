const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Docker Workshop Getting Started App: Merhaba Dünya!');
});

app.listen(port, () => {
  console.log(`App http://localhost:${port} üzerinde çalışıyor.`);
});
