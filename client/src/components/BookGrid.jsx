import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const BookGrid = ({ books, darkMode, loading }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books?.map((book) => (
                <Card
                    key={book.id}
                    className={`m-0 p-0 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer !rounded-button ${
                        darkMode ? "bg-gray-800 border-gray-700" : "bg-white"
                    }`}
                >
                    <div className="h-44 overflow-hidden relative">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1667251758769-398dca4d5f1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt={book.title}
                            className="w-full h-full object-cover"
                        />
                        {book.quantity === 0 && (
                            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 m-2 rounded">
                                OUT OF STOCK
                            </div>
                        )}
                        {book.quantity > 0 && book.quantity <= 5 && (
                            <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-2 py-1 m-2 rounded">
                                LOW STOCK
                            </div>
                        )}
                    </div>
                    <div className="p-4">
                        <h3
                            className={`font-semibold text-lg mb-1 line-clamp-1 ${
                                darkMode ? "text-white" : "text-gray-900"
                            }`}
                        >
                            {book.title}
                        </h3>
                        <p
                            className={`text-sm mb-2 ${
                                darkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                        >
                            {book.author}
                        </p>
                        <div className="flex justify-between items-center">
                            <span
                                className={`font-medium text-lg ${
                                    darkMode ? "text-white" : "text-gray-900"
                                }`}
                            >
                                ${book.price}
                            </span>
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
                </Card>
            ))}
        </div>
    );
};

export default BookGrid;
