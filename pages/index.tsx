import type { NextPage } from "next";
import Head from "next/head";
import BodyPage from "../components/Body/BodyPage";
import SkillSet from "../components/Cards/SkillSet";
import ContactPage from "../components/Contact/ContactPage";
import PageHeader from "../components/Header/PageHeader";
import Projects from "../components/Projects/Projects";
import TestPage from "../components/Test/TestPage";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,900&display=swap"
          rel="stylesheet "
        />
        <title>AB Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader />
      <BodyPage />
      <SkillSet />
      <Projects />
      <ContactPage />
      {/* <TestPage /> */}
    </div>
  );
};

export default Home;
