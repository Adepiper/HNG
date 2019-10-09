const jwt = require('jsonwebtoken');
const IUser = require('./models/internUser');
const APP_SECRET = "HNG";


const getUser = req =>
{
	const Authorization = req.header("Authorization");
	if (Authorization)
	{
		const token = Authorization.replace("Bearer ", "");
		try
		{
			const {id} = jwt.verify(token, APP_SECRET);
			const user = IUser.findOne({_id: id});
			return user;
		}
		catch(err)
		{
			return Promise.reject(err);
		}
	}
}

module.exports = { APP_SECRET, getUser };