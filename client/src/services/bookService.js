import axiosPublic from "@/utils/axiosPublic";

// upload a new book
export const uploadBookService = async (formData) => {
    const response = await axiosPublic.post("/book/upload", formData);
    return response;
};

export const getBooksService = async () => {
    const response = await axiosPublic.get("/book/get");
    return response;
};

export const increaseStockService = async (bookId, amount) => {
    const response = await axiosPublic.patch(`/book/increase-stock/${bookId}`, {
        amount,
    });
    return response.data;
};

export const decreaseStockService = async (bookId, amount) => {
    const response = await axiosPublic.patch(`/book/decrease-stock/${bookId}`, {
        amount,
    });
    return response.data;
};

export const deleteBookService = async (bookId) => {
    const response = await axiosPublic.delete(`/book/delete/${bookId}`);
    return response.data;
};
