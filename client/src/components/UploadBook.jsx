import { useContext } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BookContext from "@/context/BookContext";
import { Upload } from "lucide-react";

const UploadBook = ({ darkMode }) => {
    const {
        handleUploadBook,
        register,
        handleSubmit,
        formState: { errors },
        loading,
    } = useContext(BookContext);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="!rounded-button whitespace-nowrap cursor-pointer"
                    variant="default"
                >
                    <Upload className=" mr-2" />
                    Add New Book
                </Button>
            </DialogTrigger>
            <DialogContent
                className={`sm:max-w-[425px] ${
                    darkMode ? "bg-gray-800 text-white" : "bg-white"
                }`}
                style={{
                    maxHeight: "90vh",
                    overflowY: "auto",
                }}
            >
                <form onSubmit={handleSubmit(handleUploadBook)}>
                    <div className="grid gap-4 py-4">
                        {/* Title */}
                        <div className="grid gap-1">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                placeholder="Enter book title"
                                className={
                                    darkMode
                                        ? "bg-gray-700 text-white border-gray-600"
                                        : ""
                                }
                                {...register("title", {
                                    required: "Title is required",
                                })}
                            />
                            {errors.title && (
                                <p className="text-sm text-red-500">
                                    {errors.title.message}
                                </p>
                            )}
                        </div>

                        {/* Author */}
                        <div className="grid gap-1">
                            <Label htmlFor="author">Author</Label>
                            <Input
                                id="author"
                                placeholder="Enter author name"
                                className={
                                    darkMode
                                        ? "bg-gray-700 text-white border-gray-600"
                                        : ""
                                }
                                {...register("author", {
                                    required: "Author is required",
                                })}
                            />
                            {errors.author && (
                                <p className="text-sm text-red-500">
                                    {errors.author.message}
                                </p>
                            )}
                        </div>

                        {/* Price */}
                        <div className="grid gap-1">
                            <Label htmlFor="price">Price</Label>
                            <Input
                                id="price"
                                type="number"
                                step="0.01"
                                min="0"
                                placeholder="Enter price"
                                className={
                                    darkMode
                                        ? "bg-gray-700 text-white border-gray-600"
                                        : ""
                                }
                                {...register("price", {
                                    required: "Price is required",
                                    min: {
                                        value: 0,
                                        message: "Price must be at least 0",
                                    },
                                })}
                            />
                            {errors.price && (
                                <p className="text-sm text-red-500">
                                    {errors.price.message}
                                </p>
                            )}
                        </div>

                        {/* Quantity */}
                        <div className="grid gap-1">
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input
                                id="quantity"
                                type="number"
                                min="0"
                                placeholder="Enter quantity"
                                className={
                                    darkMode
                                        ? "bg-gray-700 text-white border-gray-600"
                                        : ""
                                }
                                {...register("quantity", {
                                    required: "Quantity is required",
                                    min: {
                                        value: 0,
                                        message: "Quantity must be at least 0",
                                    },
                                })}
                            />
                            {errors.quantity && (
                                <p className="text-sm text-red-500">
                                    {errors.quantity.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 sticky bottom-0 bg-inherit py-2">
                        <Button
                            type="submit"
                            className="!rounded-button whitespace-nowrap"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <i className="fas fa-spinner fa-spin mr-2"></i>
                                    Adding...
                                </>
                            ) : (
                                "Add Book"
                            )}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default UploadBook;
