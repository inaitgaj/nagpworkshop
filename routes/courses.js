const express = require('express');
const router = express.Router();

// Get courses
router.get('/', (req, res, next) => {
  res.json([
    {
      id: 1,
      name: 'English',
    },
    {
      id: 2,
      name: 'German',
    },
    {
      id: 3,
      name: 'Spanish',
    },
  ]);
});

module.exports = router;
