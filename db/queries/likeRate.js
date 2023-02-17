const db = require('../connection');

const likeResource = (userId, resourceId) => {
  const queryString = `INSERT INTO likes (owner_id, resource_id)
  VALUES ($1, $2)`;
  const queryParams = [userId, resourceId];

  return db
  .query(queryString, queryParams)
  .then((data) => {
    return data.rows[0];
  })
  .catch((err) => {
    console.error(err.message);
  });
};

const unlikeResource = (userId, resourceId) => {
  const queryString = `DELETE FROM likes WHERE owner_id = $1 AND resource_id = $2`
  const queryParams = [userId, resourceId];

  return db
    .query(queryString, queryParams)
    .then (data => {
      return data.rows[0];
    })
    .catch((err) => {
      console.error(err.message);
    });
};

const checkIfLiked = (userId, resourceId) => {
  const queryString = `SELECT * FROM likes WHERE owner_id = $1 AND resource_id = $2`;
  const queryParams = [userId, resourceId];

  return db
    .query(queryString, queryParams).then((data) => {
    return data.rows.length > 0;
  });
};


const rateResource1 = (resourceId) => {

  const queryString = `INSERT INTO ratings (rating, resource_id)
  VALUES (1, $1)`;
  const queryParams = [resourceId];

  return db
  .query(queryString, queryParams)
  .then((data) => {
    return data.rows[0];
  })
  .catch((err) => {
    console.error(err.message);
  });
}

const rateResource2 = (resourceId) => {

  const queryString = `INSERT INTO ratings (rating, resource_id)
  VALUES (2, $1)`;
  const queryParams = [resourceId];

  return db
  .query(queryString, queryParams)
  .then((data) => {
    return data.rows[0];
  })
  .catch((err) => {
    console.error(err.message);
  });
}


const rateResource3 = (resourceId) => {

  const queryString = `INSERT INTO ratings (rating, resource_id)
  VALUES (3, $1)`;
  const queryParams = [resourceId];

  return db
  .query(queryString, queryParams)
  .then((data) => {
    return data.rows[0];
  })
  .catch((err) => {
    console.error(err.message);
  });
}


const rateResource4 = (resourceId) => {

  const queryString = `INSERT INTO ratings (rating, resource_id)
  VALUES (4, $1)`;
  const queryParams = [resourceId];

  return db
  .query(queryString, queryParams)
  .then((data) => {
    return data.rows[0];
  })
  .catch((err) => {
    console.error(err.message);
  });
}


const rateResource5 = (resourceId) => {

  const queryString = `INSERT INTO ratings (rating, resource_id)
  VALUES (5, $1)`;
  const queryParams = [resourceId];

  return db
  .query(queryString, queryParams)
  .then((data) => {
    return data.rows[0];
  })
  .catch((err) => {
    console.error(err.message);
  });
}


module.exports = { likeResource, checkIfLiked, unlikeResource, rateResource1, rateResource2, rateResource3, rateResource4, rateResource5 };
