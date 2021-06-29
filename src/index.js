const mongoose = require('mongoose');

const app = require('./app');
const { PORT, MONGO_URL, MONGO_PARAMS } = require('../config');

app.set('port', PORT);

app.listen(PORT, async () => {
  console.log(`Server is working on port ${PORT}`);

  await mongoose
    .connect(MONGO_URL, MONGO_PARAMS)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));
});
