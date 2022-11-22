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

export async function getUserProducts(req, res) {
  const userId = req.params.userId;
  try {
    const userProducts = await productsCollection.find({ ownerId: new ObjectId(userId) }).toArray();
    res.status(200).send(userProducts);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
