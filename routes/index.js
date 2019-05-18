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

// Signup Route
router.post('/signup', (req, res) => {
	const { firstName, lastName, email } = req.body;

	// Make sure fields are filled
	if (!firstName || !lastName || !email) {
		res.redirect('/mailinglist');
		return;
	}

	// Construct req data
	const data = {
		members: [
			{
				email_address: email,
				status: 'subscribed',
				merge_fields: {
					FNAME: firstName,
					LNAME: lastName
				}
			}
		]
	};

	const postData = JSON.stringify(data);

	const options = {
		URL: 'https://us19.api.mailchimp.com/3.0/lists/34310f5157',
		method: 'POST',
		headers: {
			Authorization: 'auth 9ab0972cfb84b012f2f277d5c2ce818e-us19'
		},
		body: postData
	};

	request(options, (err, response, body) => {
		if (err) {
			res.redirect('/mailinglist');
		} else {
			if (response.statusCode === 200) {
				res.redirect('/');
			} else {
				res.redirect('/mailinglist');
			}
		}
	});
});

module.exports = router;
