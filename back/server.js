const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const figuresRouter = require('./routes/amiibo');

const app = express();
const port = process.env.port || 3591;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/amiibo', figuresRouter);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Server has crashed');
  }
  console.log(`Server is listening on ${port}`);
});
