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
        
    
    <div class="w3-top">
        <div class="w3-bar w3-black w3-card">
            <Link class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></Link>
            <Link href="#" class="w3-bar-item w3-button w3-padding-large"><a>HOME</a></Link>
            <Link href="#band" class="w3-bar-item w3-button w3-padding-large w3-hide-small"><a>BLOG</a></Link>
            <Link href="#tour" class="w3-bar-item w3-button w3-padding-large w3-hide-small"><a>SOBRE</a></Link>
            <Link href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hide-small"><a>CONTACTO</a></Link>
            <div class="w3-dropdown-hover w3-hide-small">
            <button class="w3-padding-large w3-button" title="More">MORE <i class="fa fa-caret-down"></i></button>     
            <div class="w3-dropdown-content w3-bar-block w3-card-4">
                <Link href="#" class="w3-bar-item w3-button"><a>Merchandise</a></Link>
                <Link href="#" class="w3-bar-item w3-button"><a>Extras</a></Link>
                <Link href="#" class="w3-bar-item w3-button"><a>Media</a></Link>
            </div>
            </div>
            <a href="javascript:void(0)" class="w3-padding-large w3-hover-red w3-hide-small w3-right"><i class="fa fa-search"></i></a>
        </div>
    </div>
        

        <h1 className={styles.title}>
          Bem Vindos Página inicial!
        </h1>
        <Link href="/">
        <a>Back</a>
        </Link>
               
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
