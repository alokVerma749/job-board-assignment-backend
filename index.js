import dotenv from "dotenv";
import connect_db from "./src/config/db.js";
import app from "./src/app.js";

dotenv.config();

connect_db();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('App is up and running')
});
