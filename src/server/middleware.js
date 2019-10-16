/**
 * The API middlewares, such as 'no middleware' or 'function needs authorization'.
 * @author Roman Myskovets
 * @module server/middleware
*/

module.exports = {
	middlewares: {
		plain: (req, res, next) => { next() }
	}
}