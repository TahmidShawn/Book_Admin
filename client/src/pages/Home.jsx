import React, { useState, useEffect, useContext } from "react";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookFilter from "@/components/BookFilter";
import NoBooksFound from "@/components/NoBooksFound";
import BookList from "@/components/BookList";
import BookGrid from "@/components/BookGrid";
import UploadBook from "@/components/UploadBook";
import BookContext from "@/context/BookContext";
import { Moon, Sun } from "lucide-react";

const Home = () => {
    const {
        books,
        loading,
        handleIncreaseStock,
        handleDecreaseStock,
        handleDeleteBook,
    } = useContext(BookContext);

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div
            className={`min-h-screen ${
                darkMode
                    ? "bg-gray-900 text-gray-100"
                    : "bg-gray-50 text-gray-900"
            } transition-colors duration-200`}
        >
            <div className="mx-auto px-4 py-8 max-w-7xl">
                {/* Header with Dark Mode Toggle */}
                <div
                    className={`flex justify-between items-center mb-6 ${
                        darkMode ? "text-white" : "text-gray-900"
                    }`}
                >
                    <h1 className="text-3xl font-bold">
                        Book Inventory Management
                    </h1>
                    <div className="flex items-center space-x-4">
                        <UploadBook darkMode={darkMode} />
                        <div className="flex items-center space-x-2 ml-4">
                            <span className="text-sm">
                                <Sun />
                            </span>
                            <Switch
                                checked={darkMode}
                                onCheckedChange={setDarkMode}
                                className="cursor-pointer"
                            />
                            <span className="text-sm">
                                <Moon />
                            </span>
                        </div>
                    </div>
                </div>

                {/* Filters Panel */}
                <BookFilter darkMode={darkMode} />

                {/* View Tabs */}
                <Tabs defaultValue="grid" className="mb-6">
                    <div className="flex justify-between items-center">
                        <h2
                            className={`text-xl font-semibold ${
                                darkMode ? "text-white" : "text-gray-800"
                            }`}
                        >
                            {books && books.length}{" "}
                            {books && books.length > 1
                                ? "books found"
                                : "0 book found"}
                        </h2>
                        <TabsList
                            className={`${
                                darkMode ? "bg-gray-700" : "bg-gray-100"
                            }`}
                        >
                            <TabsTrigger
                                value="grid"
                                className="cursor-pointer !rounded-button whitespace-nowrap"
                            >
                                <i className="fas fa-th-large mr-2"></i>
                                Grid View
                            </TabsTrigger>
                            <TabsTrigger
                                value="list"
                                className="cursor-pointer !rounded-button whitespace-nowrap"
                            >
                                <i className="fas fa-list mr-2"></i>
                                List View
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    {/* Grid View */}
                    <TabsContent value="grid">
                        {books?.length === 0 ? (
                            <NoBooksFound darkMode={darkMode} />
                        ) : (
                            <BookGrid
                                handleIncreaseStock={handleIncreaseStock}
                                handleDecreaseStock={handleDecreaseStock}
                                loading={loading}
                                books={books}
                                darkMode={darkMode}
                                handleDeleteBook={handleDeleteBook}
                            />
                        )}
                    </TabsContent>

                    {/* List View */}
                    <TabsContent value="list">
                        {books && books.length === 0 ? (
                            <NoBooksFound darkMode={darkMode} />
                        ) : (
                            <BookList books={books} darkMode={darkMode} />
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Home;
