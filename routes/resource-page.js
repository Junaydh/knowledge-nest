    /*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

    const express = require('express');
    const router  = express.Router();

    router.get('/', (req, res) => {
      //console.log("resource-page-get")
      res.render('resource-page');
    });

//POSTMAN for testing routes
//git pull origin <branch_name>

    module.exports = router;
