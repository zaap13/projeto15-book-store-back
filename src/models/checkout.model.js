import Joi from "joi";

export const checkoutSchema = Joi.object({
    buyerId: Joi.string().required(),
    ids: Joi.array().items(Joi.string().required()),
})