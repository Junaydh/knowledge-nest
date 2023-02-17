const db = require('../connection');

const getResources = () => {
  return db.query(`SELECT resources.id, owner_id, resource_url, title, description, img_url, AVG(rating) as avg_rating FROM resources
  FULL JOIN ratings ON resources.id = resource_id
  GROUP BY resources.id LIMIT 10;
  `)
    .then(data => {
      console.log(data);
      return data.rows;
    })
};

module.exports = { getResources }
