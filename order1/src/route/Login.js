import React from 'react'
import styles from './Login.module.css'
import luffy from '../assets/luffy.png'


const Login = () => {
  return (
    <>
      <div className={styles.logo}>
        <h1>Nika Germanishvili </h1>
      </div>



      <div className={styles.container} >

        <div className={styles.luffy}>
          <img src={luffy} />

        </div>


        <div className={styles.tablet}>

        </div>

        <div className={styles.tablet2} />

        <button className={styles.button}> Login </button>


      </div>
    </>


  )
}

export default Login