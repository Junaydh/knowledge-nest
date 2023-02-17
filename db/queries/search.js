const db = require('../connection');

const search = function(query) {
  return db.query(`SELECT resources.id, owner_id, resource_url, title, description, img_url, AVG(rating) as avg_rating FROM resources
  FULL JOIN ratings ON resources.id = resource_id JOIN tags ON resources.id = tags.resource_id WHERE LOWER(tags.name) LIKE LOWER('%'||$1||'%') OR LOWER(resources.title) LIKE LOWER('%'||$1||'%') OR LOWER(resources.description) LIKE LOWER('%'||$1||'%') GROUP BY resources.id LIMIT 10;`, [query.query])
    .then(data => {
      return data.rows;
    })
}

module.exports = { search };
