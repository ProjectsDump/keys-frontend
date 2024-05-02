import mongoose, { Schema } from "mongoose";

const passwordSchema = new Schema({
    password:{
        type: String,
        required: true
    },
    label:{
        type: String,
        required: true
    },
    username:{
        type: String,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true})

const Password = mongoose.models.Password || mongoose.model('Password', passwordSchema);

export default Password;