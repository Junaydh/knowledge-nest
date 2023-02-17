const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const {addResource, addTag} = require('../db/queries/addResource')

router.post('/', (req, res) => {
  const { title, resource_url, description, img_url, tag } = req.body;
  const owner_id = req.session.userId;

  const postData = {
    owner_id,
    title,
    resource_url,
    description,
    img_url,
    tag
  };
  addResource(postData)
  .then((result) => {
    postData.resource_id = result;

    addTag(postData)
      .then((query) => {
        res.redirect('/');
      })
      .catch((err) => {
        console.log(err.message);
      })
  })
  .catch((err) => {
    console.error('Error:', err.message);
    res.status(500).send("One or multiple fields empty! Please make sure all fields are filled before submitting!");
  })
})

module.exports = router;
