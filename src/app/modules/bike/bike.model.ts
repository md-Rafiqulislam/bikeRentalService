
// all the imports here
import { model, Schema } from "mongoose";
import { TBike } from "./bike.interface";


// bike schema
const bikeSchema = new Schema<TBike>({
    name: {
        type: String,
        required: [true, 'Bike name is required.'],
    },
    description: {
        type: String,
        required: [true, 'Bike description is required.'],
    },
    pricePerHour: {
        type: Number,
        required: [true, 'per hour bike rent price is required.'],
    },
    cc: {
        type: Number,
        required: [true, 'Bike cc is required.'],
    },
    year: {
        type: Number,
    },
    model: {
        type: String,
        required: [true, 'Bike model is required.'],
    },
    brand: {
        type: String,
        required: [true, 'Bike brand name is required.'],
    },
    isAvailable: {
        type: Boolean,
        default: true,
        requierd: [true, 'Bike is available or not message required.'],
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


// create bike model and export it
export const Bike = model('Bike', bikeSchema);