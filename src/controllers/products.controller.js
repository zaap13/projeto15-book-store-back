import { productsCollection } from "../database/db.js";

export async function getProducts(req, res){
    const user = req.user;
    console.log(user);
}