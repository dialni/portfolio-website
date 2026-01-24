import Image from "next/image";
import style from "./FrontpageCard.module.css"

type Props = {
  imgPath: string;
  title: string;
  text: string;
  href: string;
};

export default function FrontpageCard({ imgPath, title, text, href }: Props) {
  return (
    <a className={style.a} href={href}>
      <div className={style.main}>
        <Image className={style.img} src={imgPath} width={256} height={256} alt="Showcase Image" />
        <div className={style.textrow}>
          <h3 className={style.title}>{title}</h3>
          <p className={style.text}>{text}</p>
        </div>
      </div>
    </a>
  )
}
