const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  removeThought,
  createReaction,
  removeReaction,
} = require('../../controllers/thought-controller');


router.route('/').get(getThoughts).post(createThought);


router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(removeThought);


router.route('/:thoughtId/reactions').post(createReaction)


router.route('/:thoughtId/reactions').delete(removeReaction)

module.exports = router;