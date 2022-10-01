import Home from "../pages/Home";
import Posts from "../pages/Posts";
import RQPosts from "../pages/RQPosts";

const menu = [
  {
    path: "/",
    component: Home,
    text: "Home",
  },
  {
    path: "/posts",
    component: Posts,
    text: "Posts",
  },
  {
    path: "/rq-posts",
    component: RQPosts,
    text: "RQ-Posts",
  },
];

export default menu;
