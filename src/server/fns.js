module.exports = {
	fns: {
		getUsername: {
			method: 'get',
			urlParams: [],
			fn: (req, res, params) => res.send({ username: 'roman' })
		}
	}
}
