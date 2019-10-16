/**
 * The server code.
 * @author Sandeep Ravesh, Roman Myskovets
*/

const express = require('express');
const os = require('os');

const fns = require('./fns').fns;
const middlewares = require('./middleware').middlewares;

const apiPrefix = 'api';

const app = express();

app.use(express.static('dist'));

Object.keys(fns).forEach(url => {
	let { method, urlParams, fn, middleware } = fns[url];
	let fnUrl = `/${apiPrefix}/${url}/`;
	let middlewareFn = middlewares[middleware] || middlewares.plain;
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
			app.get(fnUrl, middlewareFn, func);
			break;
		case 'post':
		case 'POST':
			app.post(fnUrl, middlewareFn, func);
			break;
		default:
			console.error(`[ROUTER] No such method: ${method} (/api/${url})`);
	}
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
