//import hono
import { Hono } from "hono";

//import controller
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from "../controllers/PostController";

//inistialize router
const router = new Hono();

//routes posts index
router.get("/", (c) => getPosts(c));

// routes posts create
router.post("/", (c) => createPost(c));

// routes posts details
router.get("/:id", (c) => getPostById(c));

// routes posts update
router.patch("/:id", (c) => updatePost(c));

// routes posts delete
router.delete("/:id", (c) => deletePost(c));

export const Routes = router;
