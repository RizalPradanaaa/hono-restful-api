//import hono
import { Hono } from "hono";

//import controller
import {
  createPost,
  getPostById,
  getPosts,
} from "../controllers/PostController";

//inistialize router
const router = new Hono();

//routes posts index
router.get("/", (c) => getPosts(c));

// routes posts create
router.post("/", (c) => createPost(c));

// routes posts details
router.get("/:id", (c) => getPostById(c));

export const Routes = router;
