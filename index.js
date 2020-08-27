require("@babel/register")
const express = require('express')
const path = require('path')
const app = express()
const shell = require('./shell')
const fetchRequests = require('./fetchRequests')
const server = require('./src/server')

app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 8080, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.get('/', function (req, res) {
  let initialData = {urlParams : req.url}
  let yrIndex = req.url.indexOf('year='), yr = null;
  if(yrIndex > -1)
  yr = req.url.substr(yrIndex+5,4)
  fetchRequests(req.url.indexOf('launchSuccess=')>-1, req.url.indexOf('landSuccess=')>-1, yr)
    .then(result => {
      initialData["launchData"] = result.launchData
      const { content } = server(initialData);
      const response = shell(initialData, content)
      res.send(response);
    })
    .catch(err => {
      console.log({ err });
    });
});

app.get('*', (req, res) => {
  res.redirect(301, '/');
})
