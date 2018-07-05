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
  db.collection('articles').find().toArray( (err, data) => {
    if ( err ) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
})

app.get('/api/getXLatest', (req, res) => {

  let numLatestArticles = parseInt(req.query.numArticles);

  mostRecent = {
    _id: -1
  }
  let results = db.collection('articles').find().sort(mostRecent).toArray( (err, result) => {
    if ( err ) { res.send(err); } else {
      let topX = result.slice(0, numLatestArticles);
      res.send(topX);
    }
  });
})

app.get('/api/getXOldest', (req, res) => {

  let numLatestArticles = parseInt(req.query.numArticles);

  mostRecent = {
    _id: 1
  }
  let results = db.collection('articles').find().sort(mostRecent).toArray( (err, result) => {
    if ( err ) {
      res.send(err);
    } else {
      let topX = result.slice(0, numLatestArticles);
      res.send(topX);
    }
    
  });
})

app.get('/api/articlesFromDate', (req, res) => {
  let startDate= new Date(req.query.startDate);
  let endDate = new Date(req.query.endDate);
  
  db.collection('articles').find({
    Date: {
      $gte: startDate,
      $lt: endDate
    }
  }).toArray( (err, result ) => {
    if ( err ) {
      res.send(err);
    } else {
      let dates = result;
      res.send(dates);
    }
  })
});


app.post('/api/article', (req, res) => {
  let article = req.body;
  article.Date = new Date().toISOString();

  db.collection('articles').save(article, (err, data) => {
    if ( err ) {
      next(err);
    } else {
      res.send(data);
    }
  });
});




