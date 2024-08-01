import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

// all the imports here
const userSchema = new Schema<TUser>({
    name: {
        type: String,
        required: [true, 'User name is required.'],
    },
    email: {
        type: String,
        required: [true, 'User email is required.'],
    },
    password: {
        type: String,
        required: [true, 'User password is required.'],
    },
    address: {
        type: String,
        required: [true, 'User address is required.'],
    },
    phone: {
        type: String,
        required: [true, 'User phone number is required.'],
    },
    role: {
        type: String,
        required: [true, 'User role is required.'],
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
        timestamps: true,
    }
);


// create user model and export
export const User = model('User', userSchema);