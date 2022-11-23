import { productsCollection } from "../database/db.js";

export async function userMiddleware(req, res, next) {
  const user = req.user;

  try {
    const userProducts = await productsCollection
      .find({ ownerId: user._id })
      .toArray();
    req.products = userProducts;
    next();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
