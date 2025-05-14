import { Button } from "@/components/ui/button";

const NoBooksFound = ({ darkMode }) => {
    return (
        <div
            className={`flex flex-col justify-center items-center h-64 ${
                darkMode ? "bg-gray-800" : "bg-white"
            } rounded-lg shadow-sm p-6`}
        >
            <i className="fas fa-book-open text-4xl mb-4 text-gray-400"></i>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                No books found matching your criteria.
            </p>
            <Button
                variant="outline"
                className={`mt-4 !rounded-button whitespace-nowrap cursor-pointer ${
                    darkMode ? "bg-gray-700 text-white hover:bg-gray-600" : ""
                }`}
            >
                Clear Filters
            </Button>
        </div>
    );
};

export default NoBooksFound;
