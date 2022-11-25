import mongoose from "mongoose";

const Schema = mongoose.Schema;
const issueSchema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    nic: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model('Issue',issueSchema);