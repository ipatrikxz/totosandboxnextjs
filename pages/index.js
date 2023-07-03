import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sandbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          TOTO
        </h1>

        <p className={styles.description}>
          It is a sandbox 
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Link &rarr;</h3>
            <p>Reprehenderit proident in enim minim elit fugiat amet.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Link &rarr;</h3>
            <p>Reprehenderit proident in enim minim elit fugiat amet.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Link &rarr;</h3>
            <p>Reprehenderit proident in enim minim elit fugiat amet.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Link &rarr;</h3>
            <p>Reprehenderit proident in enim minim elit fugiat amet.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          2023 - k8s, docker, nextjs, reactjs, tailwindcss{' '}
        </a>
      </footer>
    </div>
  )
}
