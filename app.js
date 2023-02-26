import express from "express";
import cors from "cors";
import {appRouter} from "./app.router.js";
import {errorMiddleware} from "./src/common/error.middleware.js";
import "./src/common/database.config.js";
import {serviceErrorMiddleware} from "./src/common/service-error.middleware.js";
import compression from "compression";

export const app = express();

app.use(cors());
app.use(compression());
app.use(express.json());
app.use(appRouter, serviceErrorMiddleware);
app.use(errorMiddleware);
