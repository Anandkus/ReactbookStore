import mongoose from 'mongoose';

const contactShema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})

const contact = mongoose.model("contact", contactShema);
export default contact;