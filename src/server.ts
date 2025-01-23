import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(process.env.PORT, () => {
  console.log("App is running!");
});
