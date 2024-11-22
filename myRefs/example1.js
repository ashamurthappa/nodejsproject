const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // //http://localhost:5000/
  res.send('Hello world123!!!');
});
app.get('/api/courses', (req, res) => {
  //http://localhost:5000/api/courses
  res.send([1, 2, 3]);
});

//nodemon index --> listen to the changes in the file and restart the server so no need to rerun by using node index anymore
//just use nodemon filename

app.get('/api/courses/:id', (req, res) => {
  //http://localhost:5000/api/courses/3
  res.send(req.params.id);
});

app.get('/api/posts/:year/:month', (req, res) => {
  //http://localhost:5000/api/posts/2024/8
  res.send(req.params);
});

app.get('/api/posts/:year/:month', (req, res) => {
  //http://localhost:5000/api/posts/2023/9?sortBy=name
  res.send(req.query);
});

const port = process.env.PORT || 3000;
//to set port --> set PORT=5000
///in server it dynamically take port number or default 3000 as mentioned here
app.listen(port, () => console.log(`Listening to port ${port}...`));

// app.post();
// app.put();
// app.delete();
