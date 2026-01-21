import styles from "./page.module.css";
import FeaturedBox from "./_components/FeaturedBox/FeaturedBox";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <FeaturedBox
          imgPath="/red.png"
          title="Featured Project: Loan Data Visualizer"
          text="There are many online groups, that act as peer-to-peer lending communities for small,
          short-term financial loans. Thankfully, this data is publicly available online and can be
          analyzed. This project uses both Python and Postgres to collect, analyze and
          serve some statistics about these online communities."/>
      </main>
    </div>
  );
}
