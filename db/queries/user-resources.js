const db = require('../connection');

const getUserResource = (resourceID) => {
  return db.query('SELECT * FROM resources WHERE id =' + resourceID + ';')
  .then(data => {
    return data.rows
  })
  .catch(err => {
    console.error("Error:", err.message)
  });
};

module.exports = { getUserResource }
