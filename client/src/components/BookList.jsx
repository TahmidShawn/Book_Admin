import { Badge } from "@/components/ui/badge";

const BookList = ({ books, darkMode }) => {
    return (
        <div
            className={`rounded-lg shadow-sm overflow-hidden ${
                darkMode ? "bg-gray-800" : "bg-white"
            }`}
        >
            <div
                className={`grid grid-cols-12 gap-4 p-4 font-semibold border-b ${
                    darkMode
                        ? "bg-gray-700 border-gray-600 text-gray-200"
                        : "bg-gray-50 border-gray-200"
                }`}
            >
                <div className="col-span-4">Title</div>
                <div className="col-span-3">Author</div>
                <div className="col-span-2">Price</div>
                <div className="col-span-2">Stock</div>
            </div>
            {books.map((book) => (
                <div
                    key={book.id}
                    className={`grid grid-cols-12 gap-4 p-4 items-center border-b hover:${
                        darkMode ? "bg-gray-700" : "bg-gray-50"
                    } transition-colors ${
                        darkMode ? "border-gray-700" : "border-gray-100"
                    }`}
                >
                    <div
                        className={`col-span-4 font-medium ${
                            darkMode ? "text-white" : "text-gray-900"
                        }`}
                    >
                        {book.title}
                    </div>
                    <div
                        className={`col-span-3 ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                    >
                        {book.author}
                    </div>
                    <div
                        className={`col-span-2 font-medium ${
                            darkMode ? "text-white" : "text-gray-900"
                        }`}
                    >
                        ${book.price.toFixed(2)}
                    </div>
                    <div className="col-span-2">
                        <Badge
                            variant="outline"
                            className={
                                book.quantity === 0
                                    ? `bg-red-100 text-red-700 border-red-200 ${
                                          darkMode ? "bg-opacity-20" : ""
                                      }`
                                    : book.quantity <= 5
                                    ? `bg-amber-100 text-amber-700 border-amber-200 ${
                                          darkMode ? "bg-opacity-20" : ""
                                      }`
                                    : `bg-green-100 text-green-700 border-green-200 ${
                                          darkMode ? "bg-opacity-20" : ""
                                      }`
                            }
                        >
                            {book.quantity > 0
                                ? `${book.quantity} in stock`
                                : "Out of stock"}
                        </Badge>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookList;
