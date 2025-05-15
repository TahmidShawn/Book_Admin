import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    quantity: {
        type: Number,
        required: true,
        min: 0,
    },
});

const Book = mongoose.models.Book || mongoose.model("Book", BookSchema);
export default Book;
