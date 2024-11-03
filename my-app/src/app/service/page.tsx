import Link from "next/link";
import styles from  "../service/service.module.css";

const ServicePage = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.header}>Services</h1>
            <ul className={styles.list}>
                <li><Link href="/service/graphic-design">Graphic design</Link></li>
                <li><Link href="/service/video-editing">Video editing</Link></li>

            </ul>

        </div>
    )
}

export default ServicePage