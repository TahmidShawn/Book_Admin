import "dotenv/config";
import app from "./app.js";
import connectDB from "./db/db.js";

const port = process.env.PORT || 5000;
const startServer = () => {
    const server = app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
    server.on("error", (error) => {
        console.error("Server error !", error);
    });
};

connectDB()
    .then(() => {
        startServer();
    })
    .catch((err) => {
        console.error("Failed to connect with the database !", err);
    });
