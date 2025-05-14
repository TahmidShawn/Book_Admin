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
