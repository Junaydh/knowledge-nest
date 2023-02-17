    /*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

    const express = require('express');
    const router  = express.Router();
    const resourceQueries = require('../db/queries/user-resources');
    const intertCommentIntoDB = require('../db/queries/comments');

    router.get('/:resourceID', (req, res) => {
      const resourceID = req.params.resourceID;
      resourceQueries.getUserResource(resourceID)
      .then(resource => {
        console.log(resource)
        res.render('resource-page', { resource });
      })
      .catch (err => {
        res
          .status(500)
          .json({ error: err.message })
      });
      //res.render('resource-page');
    });

    router.post('/:resourceID/comment-submit', (req, res) => {

      //inserts comment to resources comments

      const resourceID = req.params.resourceID;
      const text = req.body.text;
      const userID = req.session.user_id;
      console.log("post req.session: ", req.session)
      if (!text) {
        res.status(400).json({ error: 'invalid request: no data in POST body'});
        return;
      }

      intertCommentIntoDB.insertComment(userID, resourceID, text)
      .then(id => {
        console.log("response:", id)
        res.sendStatus(201);
      })
      .catch (err => {
        res
          .status(500)
          .json({ error: err.message })
      });

      //res.json({text, userID})
    })

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
