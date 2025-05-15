import Router from "express";
import {
    decreaseStock,
    deleteSingleBook,
    getBooks,
    getSingleBook,
    increaseStock,
    uploadBook,
} from "../controllers/book.controller.js";

const router = Router();

router.route("/upload").post(uploadBook);
router.route("/get").get(getBooks);
router.route("/get/:bookId").get(getSingleBook);
router.route("/delete/:bookId").delete(deleteSingleBook);
router.route("/increase-stock/:bookId").patch(increaseStock);
router.route("/decrease-stock/:bookId").patch(decreaseStock);

export default router;
