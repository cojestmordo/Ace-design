const express = require('express');
const app = epress();
const host = http://localhost
const port = 3000

app.use(express.static('public'));

app.Listen(port, () => {
  console.log(`App listening on ${host}:${port}`);
});
