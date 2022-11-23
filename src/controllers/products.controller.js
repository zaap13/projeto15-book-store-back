import { ObjectId } from "mongodb";
import { productsCollection } from "../database/db.js";

export async function postProduct(req, res) {
  const user = req.user;
  try {
    await productsCollection.insertOne({ ...req.body, ownerId: user._id });
    res
      .status(201)
      .send({ message: "The product has been successfully registered!" });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getProducts(req, res) {
  try {
    const userProducts = await productsCollection.find().toArray();
    res.status(200).send(userProducts);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getProduct(req, res) {
  const id = req.params.id;

  const checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");

  if (!checkForHexRegExp.test(id)) {
    return res.sendStatus(409);
  }
  try {
    const product = await productsCollection.findOne({ _id: ObjectId(id) });
    if (!product) {
      return res.sendStatus(404);
    }
    res.status(200).send(product);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
