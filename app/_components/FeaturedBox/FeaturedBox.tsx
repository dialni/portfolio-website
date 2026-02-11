import Image from "next/image";
import style from "./FeaturedBox.module.css"

type Props = {
  imgPath: string;
  title: string;
  text: string;
  href: string;
};

export default function FeaturedBox({ imgPath, title, text, href }: Props) {
  return (
    <a className={style.a} href={href}>
      <div className={style.doubleBorder}>
        <div className={style.main}>
          <div className={style.imgContainer}>
            <Image className={style.img} src={imgPath} /*width={200} height={200}*/ fill={true} alt="Showcase Image" />
          </div>
          <h2 className={style.title}>{title}</h2>
          <p className={style.text}>{text}</p>
        </div>
      </div>
    </a>
  )
}
