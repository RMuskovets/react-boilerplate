/**
 * The server code.
 * @author Sandeep Ravesh, Roman Myskovets
*/

const express = require('express');
const os = require('os');

const fns = require('./fns').fns;

const app = express();

app.use(express.static('dist'));

Object.keys(fns).forEach(url => {
	let { method, urlParams, fn } = fns[url];
	let fnUrl = `/api/${url}/`;
	urlParams.forEach(param => {
		fnUrl += `:${param}/`;
	});
	let func = (req, res) => {
		fn(req, res, {
			GET: req.query,
			URL: req.params
		})
	};
	switch (method) {
		case 'get':
		case 'GET':
			app.get(fnUrl, func);
			break;
		case 'post':
		case 'POST':
			app.post(fnUrl, func);
			break;
		default:
			console.error(`[ROUTER] No such method: ${method} (/api/${url})`);
	}
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
