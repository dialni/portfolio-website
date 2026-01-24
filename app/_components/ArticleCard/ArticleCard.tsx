import Image from "next/image";
import style from "./ArticleCard.module.css"

type Props = {
  imgPath: string;
  title: string;
  text: string;
  href: string;
};

export default function ArticleCard({ imgPath, title, text, href }: Props) {
  return (
    <a className={style.a} href={href}>
      <div className={style.main}>
        <Image className={style.img} src={imgPath} width={256} height={256} alt="Showcase Image" />
        <div className={style.textrow}>
          <h2 className={style.title}>{title}</h2>
          <p className={style.text}>{text}</p>
        </div>
      </div>
    </a>
  )
}
