const db = require('../connection');


//todo change query to ``
const getUserResource = (resourceID) => {
  return db.query(`SELECT resources.id, resources.owner_id, resource_url, title, description, img_url, AVG(rating) as avg_rating, COUNT(DISTINCT(likes.id)) as total_likes FROM resources
  FULL JOIN ratings ON resources.id = resource_id
  FULL JOIN likes ON resources.id = likes.resource_id
  WHERE resources.id = $1
  GROUP BY resources.id LIMIT 10;
  `, [resourceID])
  .then(data => {
    console.log(data.rows);
    return data.rows[0]
  })
  .catch(err => {
    console.error("Error:", err.message)
  });
};

module.exports = { getUserResource }
