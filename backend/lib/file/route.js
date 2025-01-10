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

const upload = multer({storage});

router.post('/upload',upload.single('file'), async (req, res) => {
  return res.json({data: 'success'});
});

router.get('(/search/:query)?/page/:page', async (req, res) => {
  const {page, query} = req.params;
  if(query) return res.json(await getDataBySearch(query, page));
  return res.json( await getData(page));
});

module.exports = router;