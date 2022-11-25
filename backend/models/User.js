import mongoose from "mongoose";

const schema = mongoose.Schema;
const userSchema = new schema({
    username: String,
    password: String
})

export default mongoose.model('User',userSchema);