import express from "express";
import cors from "cors";
import ErrorHandler from "./utils/errorHandler.js";
import errorMiddleware from "./middlewares/error.middleware.js";

// import routes
import bookRouter from "./routes/book.route.js";

const app = express();

// middleware setup
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// routes declaration
app.use("/api/v1/book", bookRouter);

// catch undefined route
app.use((req, res, next) => {
    next(new ErrorHandler(`Cannot ${req.method} ${req.originalUrl}`, 404));
});

// middleware for errors
app.use(errorMiddleware);

export default app;
