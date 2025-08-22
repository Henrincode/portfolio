import styles from "./Home.module.scss"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { FaReact, FaNpm, FaNodeJs, FaBootstrap, FaJsSquare, FaCss3Alt, FaHtml5, FaFigma, FaGithub, FaGitAlt } from "react-icons/fa";

export default function Home() {
    return (
        <div className={styles.Home}>
            <div className={styles.telaToda + " container"}>
                <Navbar />
                <div className={styles.apresentacao + " box"}>
                    <h1>Henrique Marques</h1>
                    <div className={styles.tecnologias + ' box'}>
                        <ul className="box row">
                            <li><FaGitAlt /><span>Git</span></li>
                            <li><FaGithub /><span>Github</span></li>
                            <li><FaFigma /><span>Figma</span></li>
                            <li><FaHtml5 /><span>HTML</span></li>
                            <li><FaCss3Alt /><span>CSS</span></li>
                            <li><FaJsSquare /><span>Javascript</span></li>
                            <li><FaBootstrap /><span>Bootstrap</span></li>
                            <li><FaNodeJs /><span>NodeJS</span></li>
                            <li><FaNpm /><span>NPM</span></li>
                            <li><FaReact /><span>React</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}