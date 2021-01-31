import Head from 'next/head'
import styles from '../styles/Home.module.css'
import logo from '../public/logo_transparent.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.glass}/>
      <main className={styles.main}>
        <img className={styles.logo} src={logo}></img>
        <h1 className={styles.title}>
          Comming soon...
        </h1>

        <p className={styles.description}>
          Details of the past
        </p>

        <p className={styles.iconWrapper}>
          <a className={styles.iconLink} target="_blank" href="https://www.instagram.com/rudenejadesign/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
        </p>
      </main>
    </div>
  )
}
