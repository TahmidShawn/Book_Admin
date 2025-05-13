import asyncHandler from "../utils/asyncHandler.js";
import Book from "../models/book.model.js";

// Upload book
export const uploadBook = asyncHandler(async (req, res) => {
    const { title, author, price, quantity } = req.body;

    // Validation
    if (!title || !author || !price || !quantity) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }

    // Create book
    const book = await Book.create({
        title,
        author,
        price,
        quantity,
    });

    // Return response
    return res.status(201).json({
        success: true,
        message: "Book uploaded successfully",
        data: book,
    });
});

// Get all books with filters
export const getBooks = asyncHandler(async (req, res) => {
    const {
        search,
        author,
        minPrice,
        maxPrice,
        sort,
        page = 1,
        limit = 10,
    } = req.query;

    // Build the query object
    const query = {};

    // Search by title or author (case insensitive)
    if (search) {
        query.$or = [
            { title: { $regex: search, $options: "i" } },
            { author: { $regex: search, $options: "i" } },
        ];
    }

    // Filter by specific author
    if (author) {
        query.author = { $regex: author, $options: "i" };
    }

    // Price range filter
    if (minPrice || maxPrice) {
        query.price = {};
        if (minPrice) query.price.$gte = Number(minPrice);
        if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Sorting
    let sortOption = { createdAt: -1 }; // Default sort by newest first
    if (sort) {
        const sortFields = sort.split(",");
        sortOption = {};
        sortFields.forEach((field) => {
            const [key, value] = field.split(":");
            sortOption[key] = value === "desc" ? -1 : 1;
        });
    }

    // Execute query
    const books = await Book.find(query, null);
    const totalBooks = await Book.countDocuments(query);

    // Return response
    return res.status(200).json({
        success: true,
        data: {
            books,
            totalBooks,
        },
        message: "Books fetched successfully",
    });
});

// Get single book
export const getSingleBook = asyncHandler(async (req, res) => {
    const { bookId } = req.params;

    const book = await Book.findById(bookId);

    if (!book) {
        return res.status(404).json({
            success: false,
            message: "Book not found",
        });
    }

    return res.status(200).json({
        success: true,
        data: book,
        message: "Book fetched successfully",
    });
});

// Delete single book
export const deleteSingleBook = asyncHandler(async (req, res) => {
    const { bookId } = req.params;

    const book = await Book.findByIdAndDelete(bookId);

    if (!book) {
        return res.status(404).json({
            success: false,
            message: "Book not found",
        });
    }

    return res.status(200).json({
        success: true,
        data: null,
        message: "Book deleted successfully",
    });
});
