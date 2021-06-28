const express = require('express');
const erorrFourOFour = require('./error-handlers/404');
const erorrFiveOO = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const app = express();

app.use(logger)



app.get('/person', erorrFiveOO, validator, (req, res) => {
  const requestQuery = {
    name: req.query.name
  }

  res.json(requestQuery)


});







// app.get('/bad', (req, res) => {
//   throw new Error('enter name');
// })


app.use('*', erorrFourOFour);
app.use(erorrFiveOO)


module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`Listening on ${port}`))
  }
}