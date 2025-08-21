import styles from "./Home.module.scss"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

export default function Home() {
    return (
        <div className={styles.Home}>
            <div className={styles.telaToda}>
                <Navbar />
                <div className={styles.apresentacao}>
                    <h1>Henrique Marques</h1>
                </div>
            </div>
            <Footer />
        </div>
    )
}