const express = require('express');
const router  = express.Router();
const likeRatingApiQueries = require('../db/queries/likeRate');

router.get('/', (req, res) => {
  console.log('likeRateApiRoutes: GET /');
  const resourceId = req.body.resourceId;
  likeRatingApiQueries.countLikes(resourceId)
  .then(rows => {
    res.json(rows);
  })
  .catch (err => {
    console.error(err.message);
  })
})

router.post('/like', (req, res) => {
  const userId = req.session.userId;
  const resourceId = req.body.resourceId;

  likeRatingApiQueries.checkIfLiked(userId, resourceId)
  .then((exists) => {
    if (exists) {
      // User has already liked the resource, so remove the like
      likeRatingApiQueries.unlikeResource(userId, resourceId)
        .then(rows => {
          res.json(rows);
        })
        .catch(err => {
          console.error(err.message);
          res.status(500).send("unable to resolve query");
        })
    } else {
      // User has not liked the resource, so add a like
      likeRatingApiQueries.likeResource(userId, resourceId)
        .then(rows => {
          res.json(rows);
        })
        .catch(err => {
          console.error(err.message);
          res.status(500).send("unable to resolve query");
        });
    }
  })
  .catch(err => {
    console.error(err.message);
    res.status(500).send("unable to resolve query");
  });
});

router.post('/rate1', (req, res) => {
  const resourceId = req.body.resourceId;
  likeRatingApiQueries.rateResource1(resourceId)
  .then(rows => {
    res.json(rows);
  })
  .catch(err => {
    console.error(err.message);
    res.status(500).send("unable to resolve query");
  });
});

router.post('/rate2', (req, res) => {
  const userId = req.session.userId;
  const resourceId = req.body.resourceId;
  likeRatingApiQueries.rateResource2(resourceId)
  .then(rows => {
    res.json(rows);
  })
  .catch(err => {
    console.error(err.message);
    res.status(500).send("unable to resolve query");
  });
});

router.post('/rate3', (req, res) => {
  const resourceId = req.body.resourceId;
  likeRatingApiQueries.rateResource3(resourceId)
  .then(rows => {
    res.json(rows);
  })
  .catch(err => {
    console.error(err.message);
    res.status(500).send("unable to resolve query");
  });
});

router.post('/rate4', (req, res) => {
  const resourceId = req.body.resourceId;
  likeRatingApiQueries.rateResource4(resourceId)
  .then(rows => {
    res.json(rows);
  })
  .catch(err => {
    console.error(err.message);
    res.status(500).send("unable to resolve query");
  });
});

router.post('/rate5', (req, res) => {
  const resourceId = req.body.resourceId;
  likeRatingApiQueries.rateResource5(resourceId)
  .then(rows => {
    res.json(rows);
  })
  .catch(err => {
    console.error(err.message);
    res.status(500).send("unable to resolve query");
  });
});


module.exports = router;
