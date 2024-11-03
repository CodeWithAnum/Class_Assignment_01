import styles from "../contact/contact.module.css"
import Link from "next/link";
import React from "react";

const ContactPage = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.header}>Contact</h1>

            <ul>
                <li><Link href="/">Home Page</Link></li>
                <li><Link href="about">About Page</Link></li>
                <li><Link href="service">Service Page</Link></li>
            </ul>

        </div>
    )
}

export default ContactPage