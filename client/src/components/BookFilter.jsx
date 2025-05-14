import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const BookFilter = ({ darkMode }) => {
    return (
        <div
            className={`rounded-lg shadow-md p-6 mb-8 ${
                darkMode ? "bg-gray-800" : "bg-white"
            }`}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Search */}
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                        <i className="fas fa-search"></i>
                    </div>
                    <Input
                        type="text"
                        placeholder="Search by title or author..."
                        className={`pl-10 pr-4 py-2 w-full text-sm border-none ${
                            darkMode
                                ? "bg-gray-700 text-white placeholder:text-gray-400"
                                : "bg-gray-50 text-gray-900"
                        }`}
                    />
                </div>

                {/* Price Range */}
                <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium whitespace-nowrap">
                        Price:
                    </span>
                    <Input
                        type="number"
                        placeholder="Min"
                        className={`w-24 text-sm border-none ${
                            darkMode ? "bg-gray-700 text-white" : "bg-gray-50"
                        }`}
                    />
                    <span
                        className={darkMode ? "text-gray-400" : "text-gray-500"}
                    >
                        to
                    </span>
                    <Input
                        type="number"
                        placeholder="Max"
                        className={`w-24 text-sm border-none ${
                            darkMode ? "bg-gray-700 text-white" : "bg-gray-50"
                        }`}
                    />
                </div>

                {/* Stock Filter */}
                <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium whitespace-nowrap">
                        Stock Status:
                    </span>
                    <div className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="inStock" className="cursor-pointer" />
                            <Label
                                htmlFor="inStock"
                                className="text-sm cursor-pointer"
                            >
                                In Stock
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="outOfStock"
                                className="cursor-pointer"
                            />
                            <Label
                                htmlFor="outOfStock"
                                className="text-sm cursor-pointer"
                            >
                                Out of Stock
                            </Label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookFilter;
