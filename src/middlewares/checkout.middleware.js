import { checkoutSchema } from "../models/checkout.model.js";

export function checkoutMiddleware(req, res, next){
    const { error } = checkoutSchema.validate(req.body, { abortEarly: false });

    if(error){
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }
    next();
}