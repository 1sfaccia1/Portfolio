var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('pages/index', { title: 'Home Page' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
	res.render('pages/about', { title: 'About' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
	res.render('pages/projects', { title: 'Projects' });
});

/* GET portfolio page. */
router.get('/portfolio', function(req, res, next) {
	res.render('pages/portfolio', { title: 'Portfolio' });
});

/* GET mailinglist page. */
router.get('/mailinglist', function(req, res, next) {
	res.render('pages/mailinglist', { title: 'Mailing List' });
});

module.exports = router;
