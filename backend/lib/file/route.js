const express = require("express");
const router = express.Router();
const multer  = require('multer');
const { getData, getDataBySearch } = require("./utils");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, 'data.csv');
  },
});

const upload = multer({storage})

router.post('/upload',upload.single('file'), async (req, res) => {
  const results = await getData();
  return res.json(results);
})

router.get('/page/:page', async (req, res) => {
  const results = await getData();
  return res.json(results);
})

router.get('/search/:q', async (req, res) => {
  const results = await getDataBySearch(req.params.q);
  return res.json(results);
})

module.exports = router;