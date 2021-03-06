const router = require('express').Router();
const db = require('../../models');

const controller = require('../../controllers/controller.js');

router
  .route('/')
  .get(controller.findAllJobs)
  .post(controller.createJob)
  .put(controller.updateJob)
  .delete(controller.deleteJob);

module.exports = router;
