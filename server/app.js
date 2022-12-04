import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";
import passport from "passport";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config({
  path: "./config/config.env",
});

// Using middlewares
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

connectPassport();

// Import routes

import userRouter from "./routes/user.js";
import orderRouter from "./routes/order.js";

app.use("/api/v1", userRouter);
app.use("/api/v1", orderRouter);

// Using error middleware
app.use(errorMiddleware);
export default app;
