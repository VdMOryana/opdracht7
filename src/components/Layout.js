import Link from 'next/link';
import React from 'react';
import styles from '@/styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
        <nav className={styles.Navigation}>
            <Link className={styles.ButonLeft} href="/"> Home </Link>
            <Link className={styles.ButonRight} href="/account"> Account </Link>
        </nav>
        <main>{children}</main>      
    </>
  )
}