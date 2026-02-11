import styles from "./page.module.css";
import FeaturedBox from "./_components/FeaturedBox/FeaturedBox";
import FrontpageCard from "./_components/FrontpageCard/FrontpageCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.introSection}>
          <h2>I'm Dimitri, a software developer based in Copenhagen</h2>
          <p>Check out some of my work below!</p>
          {/*<p>Currently studying for my bachelor's in Software Development at the IT-University of Copenhagen since 2024.</p>
          <p>I have a background in C, Python, and C#, but starting to take an interest in web development.</p>
          <p>Check out some of my projects below!</p>*/}
        </section>
        <section className={styles.featuredSection}>
          <div className={styles.featuredProject}>
            <FeaturedBox
              href='/blog/loan-data-visualizer'
              imgPath="/gov.svg"
              titletype="Featured Project:"
              title="Loan Data Visualizer"
              text="There are many online groups, that act as peer-to-peer lending communities for small,
          short-term financial loans. This project comes with a handy dashboard for these loans."/>
          </div>
          <FrontpageCard href='/blog/how-this-site-is-hosted' imgPath='/server.svg' title='Article: How this site is hosted'
            text='I am not a frontend developer, but sometimes I must ask myself, "What would someone who actually enjoys JavaScript do?"' />
          <FrontpageCard href='/blog/bit-arrays' imgPath='/barray.svg' title='Article: How does a bit array work?'
            text='Most junior developers have probably heard about regular bytes and arrays, but did you know you can turn a whole number into an array?' />
        </section>
      </main>
    </div >
  );
}
