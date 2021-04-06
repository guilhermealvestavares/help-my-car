import Head from "next/head";
import styles from "../styles/Home.module.css";
import WhoWeAre from "../src/sections/WhoWeAre";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WhoWeAre />
    </div>
  );
}
