import express from 'express';
import { engine } from 'express-handlebars'; 
import conn from './db/conn.js'; 
const PORT = process.env.PORT || 8080;
const app = express();
import Blog from './model/Blog.js';
const isUser = false;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.urlencoded({extended: true,}),)
app.use(express.json())
app.use(express.static("public"));

conn.sync()
  .then(() => {
    console.log('Hello from mysql');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err + ' Sorry there\'s an error');
  });

app.get('/', (req, res) => {
  Blog.findAll({raw: true})
  .then((posts) =>{
    res.render('home', {posts: posts});
  }).catch((err) => console.log(err))

});

app.get("/user/login",(req, res)=>{
  res.render("login")
})

app.get('/writesomething', (req, res)=>{
  res.render('form')
})

app.post('/writesomething', (req, res) =>{
  const title = req.body.title
  const text = req.body.text

  Blog.create({title, text})
  res.redirect("/")
})
