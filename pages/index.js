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
        
        <Image
          src="/https://www.hypeness.com.br/1/2019/09/Vira-lata_Caramelo_1.jpg"
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
