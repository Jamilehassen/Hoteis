var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/all', function(req, res) {
  res.render('all_hotels', {title: 'All Hotels' })
});

/*router.get('/all/*', function(req, res) {
  const name = req.params.name
  res.render('all_hotels', {title: 'All Hotels', name })
});*/

module.exports = router;
