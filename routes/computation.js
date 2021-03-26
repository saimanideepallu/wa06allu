var express = require('express');
var router = express.Router();
var calcalmaths;
/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams

    
    calmaths=Number(search_params.get("x"))
    // if paramter is not specified  value of Number(search_params.get("x")) is always zero
    //console.log(Number(search_params.get("x"))+"hello")
    if(calmaths == 0)
      calmaths=Math.random()
    
    res.write('Math.log applied to '+calmaths+" is "+Math.log(calmaths)+"\n");
    res.end('Math.log10 applied to '+calmaths+" is "+Math.log10(calmaths));
 });

module.exports = router;