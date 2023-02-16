const db = require('../connection');

const myOwnedResources = (user) => {
  return db
  .query(`SELECT resource_url, title, description, img_url
  FROM resources
  WHERE owner_id = $1;`, [user])
    .then(result => {
      console.log('ROWS:', result.rows);
      return result.rows;
    });
};

const myLikedResources = (user) => {
  return db
  .query(`SELECT resources.resource_url, resources.title, resources.description, resources.img_url
  FROM resources
  JOIN likes ON resources.id = likes.resource_id
  WHERE likes.owner_id = $1;
  `, [user])
    .then(result => {
      return result.rows;
    });
};

module.exports = { myOwnedResources, myLikedResources };
