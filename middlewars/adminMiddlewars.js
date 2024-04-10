const multer = require('multer');

const handleUploadVideos = () => {

    let storage  = multer.diskStorage({
        destination:(req,file,cb) => {
            cb(null,'./uploads');
        },
        filename:(req,file,cb) => {
            cb(null,file.originalname)
        }
    });

    let upload = multer({storage:storage});
    return upload
}

module.exports = {handleUploadVideos}