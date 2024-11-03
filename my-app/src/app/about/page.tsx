import styles from "../about/about.module.css";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
    return (
        <div className= {styles.container}>
            <h1 className= {styles.header}>About</h1>

            <ul>
                <li><Link href="/">Home Page</Link></li>
                <li><Link href="contact">Contact Page</Link></li>
                <li><Link href="service">Service Page</Link></li>
            </ul>
        </div>
    )
}

export default AboutPage