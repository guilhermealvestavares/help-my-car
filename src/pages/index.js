import Head from "next/head";
import styles from "../../styles/Home.module.css";
import WhoWeAre from "../sections/WhoWeAre";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Help my car</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WhoWeAre />
    </div>
  );
}
