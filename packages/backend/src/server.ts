import bodyParser from 'body-parser';
import express from 'express';
import session from 'express-session';
import 'dotenv/config';

import AppRouter from './routes';
import connectDB from './config/database';
import ErrorHandler from './middleware/errorHandler';

const cors = require('cors');

const app = express();
app.use(cors());

const router = new AppRouter(app);
// Connect to Postgress
connectDB();

// Express configuration
app.set('port', process.env.PORT || 4200);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'secret',
    saveUninitialized: false,
    resave: false
  })
);

router.init();

const port = app.get('port');
// eslint-disable-next-line no-console
const server = app.listen(port, () => {
  return console.log(`Server started on port ${port}`);
});
app.use(ErrorHandler);

export default server;
