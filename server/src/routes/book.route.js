import Router from "express";
import {
    deleteSingleBook,
    getBooks,
    getSingleBook,
    uploadBook,
} from "../controllers/book.controller.js";

const router = Router();

router.route("/upload").post(uploadBook);
router.route("/get").get(getBooks);
router.route("/get/:bookId").get(getSingleBook);
router.route("/delete/:bookId").delete(deleteSingleBook);

export default router;
