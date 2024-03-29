const express = require('express');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
