import React from 'react'
import styles from './MeetupDetail.module.css'
function MeetupDetail(props) {
  return (
    <section className={styles.section}>
    <img src={props.image} alt={props.title} className={styles.img} />
    <h1 className={styles.title}>{props.title}</h1>
    <address className={styles.address}> {props.address}</address>
    <p className={styles.desc}>{props.description}</p>
    </section>
  )
}

export default MeetupDetail