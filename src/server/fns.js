/**
 * The API functions.
 * @author Roman Myskovets
 * @module server/fns
*/

const middlewares = require('./middleware').middlewares;

module.exports = {
	fns: {
		getUsername: {
			method: 'get',
			urlParams: [],
			fn: (req, res, params) => res.send({ username: 'roman' }),
			middleware: middlewares.plain
		}
	}
}
