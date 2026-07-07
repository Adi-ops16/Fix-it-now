import { Router } from "express";
import app from "../app";
import { categoryController } from "./category.controller";

const router = Router()

app.post('/', categoryController.postCategory)

export const categoryRoutes = router