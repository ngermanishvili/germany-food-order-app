import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import luffy from '../assets/luffy.png';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/App');
  };

  const handleGithub = () => {
    window.open('https://github.com/ngermanishvili', '_blank');
  }

  return (
    <>
      <div className={styles.logo}>
        <h1 onClick={handleGithub}>Nika Germanishvili</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.luffy}>
          <img src={luffy} alt="Luffy" />
        </div>
        <div className={styles.tablet}></div>
        <div className={styles.tablet2}></div>
        <button className={styles.button} onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
