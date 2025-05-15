import useDataFetch from "@/hooks/useDataFetch";
import {
    uploadBookService,
    increaseStockService,
    decreaseStockService,
    deleteBookService,
} from "@/services/bookService";
import { createContext, useState } from "react";
import { useForm } from "react-hook-form";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const {
        data: books,
        loading: dataFetchLoading,
        refetch,
    } = useDataFetch("/book/get");
    console.log(books);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        setValue,
        watch,
        trigger,
        getValues,
        reset,
    } = useForm();

    const handleUploadBook = async (formData) => {
        setLoading(true);
        try {
            const response = await uploadBookService(formData);
            if (!response.data?.success) {
                throw new Error(response.data?.message || "upload failed");
            }
            reset();
            refetch();
        } catch (error) {
            console.log("error", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteBook = async (bookId) => {
        setLoading(true);
        try {
            const response = await deleteBookService(bookId);
            if (!response?.success) {
                throw new Error(response?.message || "Delete failed");
            }
            await refetch(); // Refresh the book list
            return true; // Indicate success
        } catch (error) {
            console.error("Error deleting book:", error);
            return false; // Indicate failure
        } finally {
            setLoading(false);
        }
    };

    const handleIncreaseStock = async (bookId, amount = 1) => {
        setLoading(true);
        try {
            console.log("Increasing stock for:", bookId, "by:", amount);
            const response = await increaseStockService(bookId, amount);
            console.log("Response:", response);
            if (!response?.success) {
                throw new Error(response?.message || "Increase stock failed");
            }
            await refetch();
        } catch (error) {
            console.error(
                "Error increasing stock:",
                error.message,
                error.response?.data
            );
        } finally {
            setLoading(false);
        }
    };

    const handleDecreaseStock = async (bookId, amount = 1) => {
        setLoading(true);
        try {
            console.log("Decreasing stock for:", bookId, "by:", amount);
            const response = await decreaseStockService(bookId, amount);
            console.log("Response:", response);
            if (!response?.success) {
                throw new Error(response?.message || "Decrease stock failed");
            }
            await refetch();
        } catch (error) {
            console.error(
                "Error decreasing stock:",
                error.message,
                error.response?.data
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <BookContext.Provider
            value={{
                handleUploadBook,
                register,
                handleSubmit,
                control,
                formState: { errors },
                setValue,
                watch,
                trigger,
                getValues,
                loading,
                reset,
                books,
                dataFetchLoading,
                handleDeleteBook,
                handleIncreaseStock,
                handleDecreaseStock,
            }}
        >
            {children}
        </BookContext.Provider>
    );
};

export default BookContext;
