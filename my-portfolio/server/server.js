const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const app = express();

let db;
// app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(cors());


MongoClient.connect('mongodb://localhost:27017/animals', (err, client) => {
  if (err) throw err;

  db = client.db('articles');

  db.collection('animals').find().toArray( (err, result) => {
    if ( err ) throw err;

    console.log(result);
  })

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
  console.log(`listening on port ${port}`);
  })
})

app.get('/api/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/articles', (req, res) => 
{
  let article = {
    Date: new Date().toDateString(),
    Title: 'test Article',
    Subtitle: 'test articles',
    Content: 'this is a test'
  }
  const articles = [article];
  res.send(articles);
})

app.post('/api/animals', (req, res) => {
  db.collection('animals').save(req.body, (err, resp) => {
    if (err) {
      return console.log(err)
    }
    console.log('saved to database', resp.result)
    return req.body;
  })
})




