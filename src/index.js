import express from "express";
import cors from "cors";
import signRouter from "./routes/sign.routes.js";
import productsRouter from "./routes/products.routes.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(signRouter);
app.use(productsRouter);

const port = process.env.PORT || 4040;

app.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});
