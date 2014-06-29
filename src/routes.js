var fs = require('fs');
var ENODENT = fs.ENODENT;
var express = require('express');
var router = express.Router();

router.get('/favicon.ico', function(req, res) {
     console.log('getting favicon');
     res.status(200).end('./public/favicon.ico');
});

router.get('/', function(req, res) {
     res.redirect('/index');
});

// sends the homepage
router.get('/*', function(req, res) {
     // attempt to load the content
     console.log(req.url);
     var content;
     try {
          content = fs.readFileSync( './src/pages' + req.url + '.htm');

          res.render('site.hbs', { content: content }, function(err, html) {
               if (err) throw err;

               // send a 200 OK with the HTML and close connection
               res.status(200).send(html).end();
          });
     } catch(err) {
          if (err !== ENODENT) throw err;

          console.log('Error: not found');
          res.status(404).end();
     }
});

module.exports = router;
