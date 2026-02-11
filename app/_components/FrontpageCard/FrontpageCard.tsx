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
      {/*<div className={styles.doubleBorder}>*/}
        <div className={style.main}>
          <div className={style.imgContainer}>
            <Image className={style.img} src={imgPath} fill={true} alt="Showcase Image" />
          </div>
          <h3 className={style.title}>{title}</h3>
          <p className={style.text}>{text}</p>
        {/*</div>*/}
      </div>
    </a>
  )
}
