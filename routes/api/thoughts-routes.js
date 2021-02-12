const router = require('express').Router();
const {
  addThoughts,
  removeThoughts,
  addReaction,
  removeReaction
} = require('../../controllers/thoughts-controller');
// to add a thought ==/api/thoughts/<userId>
router.route('/:userId').post(addThoughts);

// to add a reaction ==/api/thoughts/<userId>/<thoughtsId>
router
  .route('/:userId/:thoughtsId')
  .put(addReaction)
  .delete(removeThoughts);

// delete a reaction ==/api/thoughts/<userId>/<thoughtsId>/<reactionId>
router.route('/:userId/:thoughtsId/:ReactionId').delete(removeReaction);

module.exports = router;
