/**
 * The API middlewares, such as 'no middleware' or 'function needs authorization'.
 * @author Roman Myskovets
 * @module server/middleware
*/

module.exports = {
	middlewares: {
		plain: (req, res, next) => { next() },

		basicDictAuth: (userDictionary) => (req, res, next) => {
			let header = req.get('Authorization');
			let base64 = Buffer.from(header, 'base64').toString('utf8');
			let splitd = base64.split(':');
			let [ username, password ] = splitd;

			let auth = false;

			if (Object.keys(userDictionary).indexOf(username) != -1
			 && Object.values(userDictionary).indexOf(password) != -1) auth = true;

			if (auth) next();
			else res.sendStatus(403);
		},
		basicFnAuth: (fn) => (req, res, next) => {
			let header = req.get('Authorization');
			let base64 = Buffer.from(header, 'base64').toString('utf8');
			let splitd = base64.split(':');
			let [ username, password ] = splitd;

			let auth = fn(username, password);
			if (auth) next();
			else res.sendStatus(403);
		}
	}
}