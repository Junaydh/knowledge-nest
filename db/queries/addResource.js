const db = require('../connection');

const addResource = (postData) => {
  for(const inp in postData) {
    if (!postData[inp]) {
      return new Promise((res, rej) => {
        rej(new Error('One or multiple fields empty'));
      })
    }
  }
  return db.query(`INSERT INTO resources (owner_id, resource_url, title, description, img_url) VALUES ($1, $2, $3, $4, $5) RETURNING id;`, [postData.owner_id, postData.resource_url, postData.title, postData.description, postData.img_url])
  .then((data) => {
    return data.rows[0];
  });
}

const addTag = (postData) => {
  return db.query(`INSERT INTO tags (resource_id, name) VALUES ($1, $2)`, [postData.resource_id.id, postData.tag])
}

module.exports = { addResource, addTag};
