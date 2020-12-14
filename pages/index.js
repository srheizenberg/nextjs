import Link from 'next/Link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Grupo Rodrigues</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem Vindos <a href="#">Página inicial!</a>
        </h1>
        <Link href="/">
        <a>Back</a>
        </Link>
        
        <Image
          src="https://images.unsplash.com/photo-1586890723289-57a0a4092d40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
          alt="Picture of the author"
          width={500}
          height={500}
          />

        <p className={styles.description}>
          comeco do main
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>H3</h3>
            <p>Paragrafo</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>H3</h3>
            <p>Paragrafo</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>H3</h3>
            <p>Paragrafo</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>H3</h3>
            <p>
            Implante instantaneamente seu site Next.js em uma URL pública com o Vercel.
            </p>
            <p>parte final do main</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        ><p>parte do footer</p>
          Powered by Cleiton{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
