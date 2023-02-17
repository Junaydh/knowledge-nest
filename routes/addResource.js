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
      .then((res) => {
        console.log('new tag added:', res)
        res.redirect('/');
      })
      .catch((err) => {
        console.log(err.message);
      })
  })
  .catch((err) => {
    console.error('Error:', err.message);
  })

})

module.exports = router;
