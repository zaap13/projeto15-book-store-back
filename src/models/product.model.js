import joi from "joi";

export const productSchema = joi.object({
  title: joi.string().required(),
  image: joi.string().uri().required(),
  price: joi.number().min(0).required(),
  description: joi.string().min(18).required(),
  author: joi.string().required(),
  genre: joi.string().required(),
});
