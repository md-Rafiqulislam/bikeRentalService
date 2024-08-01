
// all the imports here
import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";


// validation request function to check any zod object
const validateRequest = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            // validate the object with zod
            await schema.parseAsync({
                body: req.body,
            });
            
            // call the next function
            next();
        } catch (error) {
            next(error);
        }
    }
};

// export validate request function
export default validateRequest;