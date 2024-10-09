import express from "express";

const PORT = process.env.PORT;
const app = express();

import connectDB from "./connection/conn.js";

connectDB();

app.listen(PORT, () => {
  console.log(`Backend running on ${PORT}`);
});
