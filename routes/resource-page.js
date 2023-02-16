    /*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

    const express = require('express');
    const router  = express.Router();
    const resourceQueries = require('../db/queries/user-resources');
    router.get('/:resourceID', (req, res) => {
      const resourceID = req.params.resourceID;
      resourceQueries.getUserResource(resourceID)
      .then(resources => {
        console.log(resources)
        res.render('resource-page', { resources });
      })
      .catch (err => {
        res
          .status(500)
          .json({ error: err.message })
      });
      //res.render('resource-page');
    });

    // router.get('/:resourceid', (req, res) => {
    //   //console.log("resource-page-get")
    //   res.render('resource-page');
    // });

    // router.get('/owned', (req, res) => {
    //   const userId = req.session.userId;
    //   myResourcesQueries.myOwnedResources(userId)
    //     .then(ownedResources => {
    //       res.send(ownedResources)
    //       // res.render('myResources', ownedResources);
    //     })
    //     .catch(err => {
    //       console.error(err);
    //       res.send(err);
    //     });
    // });

//POSTMAN for testing routes
//git pull origin <branch_name>

    module.exports = router;
