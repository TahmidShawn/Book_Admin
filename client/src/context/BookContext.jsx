import { uploadBookService } from "@/services/bookService";
import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

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
            console.log("success");
            // navigate(location?.state?.from || "/");
        } catch (error) {
            console.log("error", error);
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
            }}
        >
            {children}
        </BookContext.Provider>
    );
};

export default BookContext;
