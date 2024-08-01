
// all the imports here
import express, { Application } from 'express';
import config from './config';

// call the express application
const app: Application = express()


app.get('/', (req, res) => {
  res.send('Hello, in the World of Traveles.welcom to bike rental service...');
})

app.listen(config.port, () => {
  console.log(`bike rental service app is listening on port ${config.port}`)
})
