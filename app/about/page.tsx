import React from 'react'
import styles from "./about.module.css";

export default function About() {
  return (
    <div>
        <h1 className={styles.tag}>Hello about!</h1>
        <h3>This is a subtitle</h3>
        <p>Awesome text</p>
    </div>
  )
}
