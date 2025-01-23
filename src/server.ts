import express from "express";
import "express-async-errors";
import cors from "cors";

import { router } from "./routes";
import errorMiddleware from "./middlewares/errors";

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
