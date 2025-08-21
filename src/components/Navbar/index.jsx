import styles from "./Navbar.module.scss"

export default function Navbar() {
    return (
        <nav className={styles.Navbar + " container"}>
            <div className={styles.box + " box row"}>
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