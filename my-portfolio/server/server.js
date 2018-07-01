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

app.get('/api/getXLatest', (req, res) => {

  let numLatestArticles = parseInt(req.query.numArticles);

  mostRecent = {
    _id: -1
  }
  let results = db.collection('articles').find().sort(mostRecent).toArray( (err, result) => {
    let topX = result.slice(0, numLatestArticles);
    res.send(topX);
  });
})

app.get('/api/getXOldest', (req, res) => {

  let numLatestArticles = parseInt(req.query.numArticles);

  mostRecent = {
    _id: 1
  }
  let results = db.collection('articles').find().sort(mostRecent).toArray( (err, result) => {
    let topX = result.slice(0, numLatestArticles);
    res.send(topX);
  });
})


app.post('/api/article', (req, res) => {
  let article = req.body;
  article.Date = new Date();

  db.collection('articles').save(article, (err, data) => {
    if ( err ) {
      next(err);
    } else {
      res.send(data);
    }
  });
});


app.post('/api/animals', (req, res) => {
  db.collection('animals').save(req.body, (err, resp) => {
    if (err) {
      return console.log(err)
    }
    console.log('saved to database', resp.result)
    return req.body;
  })
})




