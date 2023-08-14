"use client";
import blogsData from "../../blogData.json";
import style from "../../css/Post.module.css";

const Page = ({ params }) => {
  const filteredData = blogsData.filter((post) => post.id == params.id);

  return (
    <div className={style.main}>
      <h1 className={style.title}>{filteredData[0].title}</h1>
      <p className={style.body}>{filteredData[0].content}</p>
      <p className={style.time}>*Date of Post: {filteredData[0].date}</p>
    </div>
  );
};
export default Page;
