import Book from '../models/book_models.js';

export const getBook = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book)
    } catch (error) {
        console.log("get error =", error);
        res.status(500).json(error);
    }
}