import { TBike } from "./bike.interface"
import { Bike } from "./bike.model"

// create a bike into database
const createBikeIntoDd = async (payload: TBike) => {
    const bike = await Bike.create(payload);
    return bike;
}

// get all the bikes from the data base
const getAllBikesFromDd = async () => {
    const bikes = await Bike.find();
    return bikes;
}



// updata a single bike into data base
const updateSingleBikeIntoDd = async (id: string, payload: Partial<TBike>) => {
    const bike = await Bike.findByIdAndUpdate( {_id: id}, payload, {new: true});
    return bike;
}

// delete a bike from data base
const deleteBikeFromDd = async (id: string) => {
    const bike = await Bike.findByIdAndUpdate( {_id: id}, {isDeleted: true}, {new: true});
    return bike;
}


// all the export here
export const bikeServices = {
    createBikeIntoDd,
    getAllBikesFromDd,
    updateSingleBikeIntoDd,
    deleteBikeFromDd,
};