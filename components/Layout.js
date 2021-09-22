import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import MyNav from './MyNav.js'
import Login from './Login'

// 09/08/2021. For some reason this parameter MUST be
// called "children". Have no clue why.
const Layout = ({children}) => {
  // Login Modal starts out closed.
  const [showLoginState, setShowLogin] = useState(false)

  // function handleClickFromLogin() {
  //   // Close Login Modal.
  //   setShowLogin(false)
  // }

  const handleClickFromLoginWin = () => {
    // Close Login Modal.
    setShowLogin(false)
  }

  const handleLoginLinkClick = () => {
    // Open Login Modal.
    setShowLogin(true)
  }

  return (
    <>
      <MyNav 
        handleLoginLinkClick = { handleLoginLinkClick } 
      />
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          {children}
        </main>

        <Login 
          showit = { showLoginState }
          handleClose = { handleClickFromLoginWin } 
        />
        
      </div>
    </>
  )
}

export default Layout