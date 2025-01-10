const express = require('express');
const cors = require('cors');
const app = express();
const port = 3004;
const fileRoute = require('./lib/file/route');

app.use(cors());
app.use('/file/', fileRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})