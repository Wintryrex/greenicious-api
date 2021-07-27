import mongoose from 'mongoose';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const info = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`;
const connection = mongoose
  .connect(info, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error: Error) => console.log(error));

export default connection;
