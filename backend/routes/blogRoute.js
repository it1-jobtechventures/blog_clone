import express from "express";
//to store image 
import multer from "multer";
import { addBlog, listBlog, removeBlog ,getBlockById} from "../controllers/blogController.js";

const blogRouter = express.Router();

//image storage engine using multer 
const storage = multer.diskStorage({
    destination:'upload',
    filename:(res,file,cb)=>{
        // file will be store in upload folder with time stamp
        return cb(null , `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})


blogRouter.post("/add", upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'images', maxCount: 10 }
]), addBlog);

blogRouter.get('/list' ,listBlog)

blogRouter.post('/remove' ,removeBlog)

blogRouter.post('/blog/:id' ,getBlockById)
export default blogRouter;