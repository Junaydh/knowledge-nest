const db = require('../connection');

const getTags = () => {
  return db.query(`SELECT tags.name, resource_id FROM tags JOIN resources ON resource_id = resources.id`)
    .then(data => {
      return data.rows;
    })
};

module.exports = { getTags };
