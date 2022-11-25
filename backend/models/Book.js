import mongoose from "mongoose";

const Schema = mongoose.Schema;
const bookSchema = new Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    author: {
        type: String,
    },
    quantity: {
        type: String,
    }
});

export default mongoose.model('Book',bookSchema);