import Router from "express";
import {
    deleteSingleBook,
    getBooks,
    getSingleBook,
    uploadBook,
} from "../controllers/book.controller.js";

const router = Router();

router.route("/upload").post(uploadBook);

export default router;
