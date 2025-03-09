import { Router } from "express";
import { createNewPainting, deletePost, getAll, getOnePainting,  } from "../controllers/paintingsController.js";

const postRouter = Router();
postRouter.post("/posts",createNewPainting)
postRouter.get("/posts",getAll)
postRouter.get("/posts/:id",getOnePainting)
postRouter.delete("/posts/:id", deletePost);

export default postRouter;