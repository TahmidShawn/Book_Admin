import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    publishBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 200,
    },
    description: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 400,
    },
    author: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
    },
    category: {
        type: String,
        enum: [
            "fiction",
            "science-fiction",
            "fantasy",
            "mystery",
            "romance",
            "thriller",
            "biography",
            "history",
            "self-help",
            "business",
            "science",
            "poetry",
            "children",
            "novel",
            "adventure",
            "bangla-literature",
            "islamic",
            "textbooks",
            "travel",
            "cooking",
            "health-fitness",
            "horror",
            "motivational",
            "philosophy",
            "psychology",
            "drama",
            "short-stories",
        ],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountPercentage: {
        type: Number,
        default: 0,
    },
    coverPhoto: {
        type: String,
        required: true,
    },
    coverPhotoPublicId: {
        type: String,
    },
    trialPhotos: {
        type: [String],
        required: true,
        validate: {
            validator: function (val) {
                return val.length >= 1 && val.length <= 5;
            },
            message: "You must upload between 1 and 5 trial photos",
        },
    },
    trialPhotoPublicIds: {
        type: [String],
        default: [],
    },
    language: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
    },
    inStock: {
        type: Boolean,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    isBestSeller: {
        type: Boolean,
        default: false,
    },
    ratings: {
        // will change later
        type: Number,
        default: 0,
    },
});

BookSchema.pre("save", function (next) {
    this.inStock = this.quantity > 0;
    next();
});

const Book = mongoose.models.Book || mongoose.model("Book", BookSchema);
export default Book;
