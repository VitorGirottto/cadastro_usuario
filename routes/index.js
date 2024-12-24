var express = require('express');
var router = express.Router();
const db = require("../db");

/* GET home page. */
router.get('/', async (req, res, next) => {
  const result = await db.find();
  res.render('index', { title: 'Express', result });
});

router.post("/save", async(req, res) => {
const customer = req.body;
const result = await db.insert(customer);
console.log(result);
res.json(result);
})

router.post("/delete", async(req, res) => {
  const id = req.body.id;
  const result = await db.remove(id);
  console.log(result);
  res.json(result);
  })

router.post("/edit", async(req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const result = await db.update(id, name);
  console.log(result);
  res.json(result);
  })

module.exports = router;
