import React from "react";
import blogsData from "../blogData.json";
import Link from "next/link";
import style from "../css/Blogs.module.css";

const Page = () => {
  return (
    <div className={style.main}>
      <h1 className={style.blogsHeader}>Blog List</h1>
      <div className={style.blogs}>
        {blogsData.map((blog) => {
          return (
            <p>
              <Link className={style.myBlogLink} href={`/post/${blog.id}`}>
                {blog.id}- {blog.title}
              </Link>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
