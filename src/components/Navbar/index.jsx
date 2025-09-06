import styles from "./Navbar.module.scss"
import Particulas from "../Particulas"
import { useEffect, useState } from "react"

export default function Navbar() {
    const [rolado, setRolado] = useState(false)


    useEffect(() => {
        const handleScroll = () => setRolado(window.scrollY > 1)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={styles.Navbar + " container " + (rolado && styles.NavReduce)}>
            <div className={styles.box + " box row "}>
                <div className={styles.logo}>Logo</div>
                <ul className="row">
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    <li>Link 4</li>
                </ul>
            </div>
        </nav>
    )
}