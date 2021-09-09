import Nav from './Nav.js'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'

// 09/08/2021. For some reason this parameter MUST be
// called "children". Have no clue why.
const Layout = ({children}) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            {children}
        </main>
      </div>
    </>
  )
}

export default Layout