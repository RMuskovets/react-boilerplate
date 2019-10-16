/**
 * @author Roman Myskovets
 * @module server/fns
 * The API functions.
*/

module.exports = {
	fns: {
		getUsername: {
			method: 'get',
			urlParams: [],
			fn: (req, res, params) => res.send({ username: 'roman' }),
			middleware: 'none'
		}
	}
}
