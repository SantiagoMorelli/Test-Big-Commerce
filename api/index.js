const express = require("express");
const req = require("express/lib/request");
const app = express();
const productRoute = require("./routes/product");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api/product", productRoute);

app.listen(process.env.PORT || 2000, () => {
  console.log("backend server is running!");
});
