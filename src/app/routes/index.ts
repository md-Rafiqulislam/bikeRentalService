
// all the imports here
import { Router } from "express";
import { TRoute } from "./routes.interface";

// creating the main router object
const router = Router();


// all the routes
const allRoutes: TRoute[] = [];


// loop through all the routes
allRoutes.forEach((route) => router.use(route.path, route.route));

// export the router object
export default router;