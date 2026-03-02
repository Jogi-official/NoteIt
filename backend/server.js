const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname, 'config.env') });
const mongoose = require('mongoose');

const app = require('./app');

const DB = process.env.DATABASE;
if (!process.env.DATABASE || !process.env.DATABASE_PASSWORD) {
  throw new Error(
    'Missing required env vars DATABASE and/or DATABASE_PASSWORD. Check that config.env is loaded.',
  );
}

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((_con) => {
    console.log('DB CONNECTION SUCCESSFULL');
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
