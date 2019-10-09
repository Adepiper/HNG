const router = require('express').Router();
const internUser = require('./controllers/internUser');
//const itemsController = require('./controllers/itemsController.js');

router.get('/', function (req, res) 
{
	res.setHeader("Content-Type", "text/html");
    res.end(`
    	<p style="">Official docummentation for this API could be found at <br />
    	<a href="https://adepiper.github.io/HNG-backend-docs" target="_self">
    	https://adepiper.github.io/HNG-backend-docs</a><p>`);
});
// App routes
router.route('/login').post(internUser.login);
router.route('/signup').post(internUser.signup);
//router.route('/items').get(itemsController.index);
//router.route('/forgot').post(userController.forgot)
///	.post(itemsController.new)
//    .patch(itemsController.update)
//    .put(itemsController.update)
//    .delete(itemsController.delete);
// Export API routes
module.exports = router;