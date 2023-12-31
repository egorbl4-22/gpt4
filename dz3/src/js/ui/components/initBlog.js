import BlogData from "../../mockData/BlogData.js";
import { BlogTemplate } from "../templates/blogTemplate.js";

const initBlog = () => {
  const BlogNode = document.querySelector(".blog");

  BlogNode.insertAdjacentHTML(
    "beforeend",
    BlogTemplate(BlogData)
  );
};

export default initBlog;