var express = require('express');
const AdminController = require('../controllers/adminController');
const { handleUploadVideos } = require('../middlewars/adminMiddlewars');
var router = express.Router();

const upload = handleUploadVideos();
/* GET users listing. */
router.get('/get', function(req, res) {
  res.send({message:"Welcome TO RJ Industries !!"});
});

router.post('/addAdmin',AdminController.AddAdmin)


router.post('/addProject',upload.single('project'),AdminController.UploadProjectVideo);

module.exports = router;
