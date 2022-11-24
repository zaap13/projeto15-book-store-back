import { ObjectId } from "mongodb";
import { salesCollection, productsCollection } from "../database/db.js";

export async function postSale(req, res) {
  const { ids, buyerId } = req.body;
  const objIds = ids.map((id) => new ObjectId(id));
  const saleInfo = [];
  try {
    const soldProducts = await productsCollection
      .find({ _id: { $in: objIds } })
      .toArray();
    soldProducts.forEach(({ title, image, price, ownerId }) =>
      saleInfo.push({
        title,
        image,
        price,
        ownerId,
        buyerId,
      })
    );
    await salesCollection.insertMany(saleInfo);
    await productsCollection.deleteMany({ _id: { $in: objIds } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getSales(req, res) {
    try {
      const soldProducts = await salesCollection.find().toArray();
      res.status(200).send(soldProducts);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
