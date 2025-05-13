import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 200,
    },
    author: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
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
