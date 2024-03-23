const express = require('express')
const app = express()

app.set("view engine","ejs");
app.use(express.static(`./public`));
app.get('/about', function (req, res) {
  res.render("fileone")
})
app.get('/', function (req, res) {
  res.render("filetwo")
})
app.get('/error', function (req, res) {
  throw Error("error");
})
app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
  
}
)
app.listen(3000)