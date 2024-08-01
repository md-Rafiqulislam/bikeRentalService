
// all the imports here
import { TResponse } from "./sendRequest.interface";
import { Response } from "express";


// send request handler
const sendRequest = <T>(res: Response, data: TResponse<T>) => {
    res.status(data?.statusCode).json({
        success: data.success,
        message: data.message,
        data: data.data,
    });
};

// export the sendRequest handler
export default sendRequest;