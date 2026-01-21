import Image from "next/image";
import style from "./FeaturedBox.module.css"

type Props = {
  imgPath: string;
  title: string;
  text: string;
};

export default function FeaturedBox({ imgPath, title, text }: Props) {
  return (
    <a className={style.a} href="/">
      <div className={style.main}>
        <Image className={style.img} src={imgPath} width={200} height={200} alt="Showcase Image" />
        <div className={style.textrow}>
          <h2 className={style.title}>{title}</h2>
          <p className={style.text}>{text}</p>
        </div>
      </div>
    </a>
  )
}
