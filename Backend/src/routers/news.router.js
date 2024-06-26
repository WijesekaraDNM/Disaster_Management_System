import { Router } from 'express';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/httpStatus.js";
import handler from 'express-async-handler';
import { NewsModel } from "../models/news.model.js";
import path from 'path';
import multer from 'multer';

const router = Router();

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/createNews', handler(async (req, res) => {

    const {heading, author, newsBody, image} = req.body;
    const currentDateTime = new Date(); //real time
    const createdDate = currentDateTime.toDateString();
    const createdTime = currentDateTime.toTimeString();
    const show = false;

        // Validate required fields
        if (!heading || !author || !newsBody ) {
            return res.status(BAD_REQUEST).send("Missing required fields");
          }
    const newID = await generateNewsId(heading);

    try {
        const newNews = await NewsModel.create({
            newsId: newID,
            heading,
            author,
            image,
            newsBody,
            createdDate,
            createdTime,
            show,
        });
        res.send(newNews);
        console.log("image", newNews.image);
    } catch(error){
        console.error("Error creating news:", error);
        res.status(BAD_REQUEST).send("News create failed");
    }

}));

router.patch('/updateNews/:newsId', handler(async (req, res) => {
    const { newsId } = req.params;
    const {heading, author, newsBody, show, image} = req.body;
    const currentDateTime = new Date(); //real time
    const createdDate = currentDateTime.toDateString();
    const createdTime = currentDateTime.toTimeString();
        // Validate required fields
        if (!heading || !author || !newsBody ) {
            return res.status(BAD_REQUEST).send("Missing required fields");
        }    
        let updateData = { heading, author, newsBody, show, createdDate, createdTime, image};
    try{
        const updatedNews = await NewsModel.findOneAndUpdate(
            { newsId: newsId },
            updateData,
            { new: true }
        );

        res.send(updatedNews);
    } catch (error) {
        console.error("Error updating news:", error);
        res.status(BAD_REQUEST).send("News update failed");
    }

}));

router.post('/getNews', handler(async (req, res) => {
    try {
        const result = await NewsModel.find({});
        res.send(result);
    } catch (error) {
        res.status(BAD_REQUEST).send("News fetch error");
    }
}));

router.delete('/deleteNews/:newsId', handler(async (req, res) => {
    const { newsId } = req.params;
    try {
        const deleteNewsItem = await NewsModel.findOneAndDelete({ newsId });
        res.send(deleteNewsItem);

    } catch (error) {
        res.status(BAD_REQUEST).send("News fetch error");
    }
}));



const generateNewsId = async () => {
    var count = await NewsModel.countDocuments();

    while (await NewsModel.findOne({ newsId: count.toString() })) {
        count++;
    }

    return count.toString();
};

export default router;
