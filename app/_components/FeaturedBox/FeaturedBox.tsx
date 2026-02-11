import Image from "next/image";
import styles from "./FeaturedBox.module.css"

type Props = {
  imgPath: string;
  titletype: string;
  title: string;
  text: string;
  href: string;
};

export default function FeaturedBox({ imgPath, titletype, title, text, href }: Props) {
  return (
    <a className={styles.a} href={href}>
      {/*<div className={styles.doubleBorder}>*/}
      <div className={styles.main}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={imgPath} /*width={200} height={200}*/ fill={true} alt="Showcase Image" />
        </div>
        <div className={styles.title}>
          <h2>{titletype}<br/>{title}</h2>
        </div>
        <div className={styles.text}>
          <p className={styles.text}>{text}</p>
        </div>
        {/*</div>*/}
      </div>
    </a>
  )
}
