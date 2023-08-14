import Link from "next/link";
import style from "./css/Home.module.css";
export default function Home() {
  return (
    <div className={style.main}>
      <h1 className={style.h1}>Well come my Next JS Project</h1>
      <div>
        <Link className={style.link} href={"/blogs"}>
          Go to Blogs -{">"}
        </Link>
      </div>
    </div>
  );
}
