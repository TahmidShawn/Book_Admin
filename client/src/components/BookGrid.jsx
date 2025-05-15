import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

const BookGrid = ({
    books,
    darkMode,
    loading,
    handleDeleteBook,
    handleIncreaseStock,
    handleDecreaseStock,
}) => {
    if (loading) return <p>Loading books...</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books?.map((book) => (
                <Card
                    key={book._id}
                    className={`relative m-0 p-0 overflow-hidden hover:shadow-lg transition-shadow !rounded-button ${
                        darkMode ? "bg-gray-800 border-gray-700" : "bg-white"
                    }`}
                >
                    {/* Book image with status indicators */}
                    <div className="h-44 overflow-hidden relative">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1667251758769-398dca4d5f1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt={book.title}
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute top-2 right-2">
                            <Badge
                                variant="outline"
                                className={
                                    book.quantity === 0
                                        ? `bg-red-100 text-red-700 border-red-200 ${
                                              darkMode
                                                  ? "bg-opacity-20 text-white"
                                                  : ""
                                          }`
                                        : book.quantity <= 5
                                        ? `bg-amber-100 text-amber-700 border-amber-200 ${
                                              darkMode
                                                  ? "bg-opacity-20 text-white"
                                                  : ""
                                          }`
                                        : `bg-green-100 text-green-700 border-green-200 ${
                                              darkMode
                                                  ? "bg-opacity-20 text-white"
                                                  : ""
                                          }`
                                }
                            >
                                {book.quantity > 0
                                    ? `${book.quantity} in stock`
                                    : "Out of stock"}
                            </Badge>
                        </div>

                        {/* Delete button */}
                        <div className="absolute top-2 left-2">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className={`rounded-full w-8 h-8 cursor-pointer ${
                                            darkMode
                                                ? "text-gray-300 hover:bg-red-900/80 hover:text-white"
                                                : "text-gray-600 bg-red-100 hover:bg-red-400 hover:text-black"
                                        }`}
                                    >
                                        <Trash2Icon className="h-4 w-4" />
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>
                                            Confirm Deletion
                                        </DialogTitle>
                                    </DialogHeader>
                                    <p className="py-4">
                                        Are you sure you want to delete "
                                        {book.title}"?
                                    </p>
                                    <DialogFooter>
                                        <Button
                                            variant="destructive"
                                            onClick={() =>
                                                handleDeleteBook(book._id)
                                            }
                                        >
                                            Delete
                                        </Button>
                                        <DialogTrigger asChild>
                                            <Button variant="outline">
                                                Cancel
                                            </Button>
                                        </DialogTrigger>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>

                    {/* Book details */}
                    <div className="p-4 space-y-2">
                        <h3
                            className={`font-semibold text-lg line-clamp-1 ${
                                darkMode ? "text-white" : "text-gray-900"
                            }`}
                        >
                            {book.title}
                        </h3>
                        <p
                            className={`text-sm ${
                                darkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                        >
                            {book.author}
                        </p>

                        {/* Price and stock controls */}
                        <div className="flex justify-between items-center pt-2">
                            <span
                                className={`font-medium ${
                                    darkMode ? "text-white" : "text-gray-900"
                                }`}
                            >
                                Price: {book.price} 
                            </span>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() =>
                                        handleDecreaseStock(book._id)
                                    }
                                    disabled={book.quantity <= 0}
                                    className={`p-1.5 rounded-full ${
                                        book.quantity <= 0
                                            ? "bg-gray-200 cursor-not-allowed"
                                            : `${
                                                  darkMode
                                                      ? "bg-red-900/30 cursor-pointer hover:bg-red-900/50"
                                                      : "bg-red-100 cursor-pointer hover:bg-red-200"
                                              }`
                                    }`}
                                >
                                    <MinusIcon className="h-4 w-4" />
                                </button>

                                <span className="text-sm font-medium w-6 text-center">
                                    {book.quantity}
                                </span>

                                <button
                                    onClick={() =>
                                        handleIncreaseStock(book._id)
                                    }
                                    className={`p-1.5 rounded-full ${
                                        darkMode
                                            ? "bg-green-900/30 cursor-pointer hover:bg-green-900/50"
                                            : "bg-green-100 cursor-pointer hover:bg-green-200"
                                    }`}
                                >
                                    <PlusIcon className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default BookGrid;
