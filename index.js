const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there again again, second test, github test' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`listening on port ${PORT}`));
