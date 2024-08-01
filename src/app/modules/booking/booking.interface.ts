
// all the imports here
import { ObjectId } from "mongoose"

// booking type
export type TBooking = {
    bikeId: string;
    startTime: string;
};


// type of function get mili seconds from string of time
export type TGetMiliSeconds = (timeString: string) => number;

// type of function get hour from miliseconds
export type TGetHour = (miliseconds: number) => number;