import { productSchema } from "../models/product.model.js";

export function productMiddleware(req, res, next){
    const { error } = productSchema.validate(req.body, { abortEarly: false });
    
    if(error){
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }
    next();
}