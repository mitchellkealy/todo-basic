const fetch = (...args) => import('node-fetch')
    .then(({default: fetch}) => fetch(...args));
var express = require('express');
var router = express.Router();
var cors = require('cors')

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
    id: 1,
    username: "samsepi0l"
  }, {
    id: 2,
    username: "D0loresH4ze"
  }]);
});

router.post('/list-tasks',async function (req, res, next) {
  console.log(req.body)
  try {
    fetch('http://localhost:3005/json-to-text', {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.text())
        .then(json => res.send(json));


  } catch (err) {
    console.log(err)
    res.status(500).send('Something went wrong')
  }
});




module.exports = router;