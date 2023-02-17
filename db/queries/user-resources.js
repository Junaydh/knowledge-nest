const db = require('../connection');


//todo change query to ``
const getUserResource = (resourceID) => {
  return db.query(`SELECT * FROM resources WHERE id = $1;`, [resourceID])
  .then(data => {
    console.log(data.rows);
    return data.rows[0]
  })
  .catch(err => {
    console.error("Error:", err.message)
  });
};

module.exports = { getUserResource }
