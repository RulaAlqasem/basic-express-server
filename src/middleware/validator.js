module.exports = (req, res, next) => {
  if (`${Number(req.query.name)}` !== `NaN`) {
    console.log(req.query.name, Number(req.query.name), 'if');
    next('Not a string!')


  }
  if (req.query.name === undefined) {
    console.log(req.query.name, Number(req.query.name), 'ifelse');
    next('enter name')


  }
  else {
    console.log(req.query.name, Number(req.query.name), 'else');
    next();
  }
}

