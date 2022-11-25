import mongoose from "mongoose";

const Schema = mongoose.Schema;
const memberSchema = new Schema({
    nic: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    gender: {
        type: String,
    },
    address: {
        type: String,
    },
    contact: {
        type: String,
    }
});

export default mongoose.model('Member',memberSchema);