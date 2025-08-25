import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Particulas from "../../components/Particulas";
import { FaReact, FaNpm, FaNodeJs, FaBootstrap, FaJsSquare, FaCss3Alt, FaHtml5, FaFigma, FaGithub, FaGitAlt, FaWindows, FaFileWord, FaFileExcel, FaFilePowerpoint, FaWordpress, FaDatabase } from "react-icons/fa";
import { RiSupabaseLine, RiVercelFill } from "react-icons/ri";
import { SiConstruct3 } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

import styles from "./Home.module.scss"


export default function Home() {
    return (
        <div className={styles.Home}>
            <div className={styles.telaToda + " container "}>
                <Navbar />
                <Particulas className={styles.Particulas}>
                    <div className={styles.apresentacao + " box pad "}>
                        <h1>Henrique Marques</h1>
                        <div className={styles.tecnologias + ' box '}>
                            <ul className="box row">
                                <li><FaGitAlt /><span>Git</span></li>
                                <li><FaGithub /><span>Github</span></li>
                                <li><FaFigma /><span>Figma</span></li>
                                <li><FaHtml5 /><span>HTML</span></li>
                                <li><FaCss3Alt /><span>CSS</span></li>
                                <li><FaJsSquare /><span>Javascript</span></li>
                                <li><FaBootstrap /><span>Bootstrap</span></li>
                                <li><FaWordpress /><span>Wordpress</span></li>
                                <li><FaNodeJs /><span>NodeJS</span></li>
                                <li><FaNpm /><span>NPM</span></li>
                                <li><FaReact /><span>React</span></li>
                                <li><RiVercelFill /><span>Vercel</span></li>
                                <li><RiSupabaseLine /><span>Supabase</span></li>
                                <li><FaDatabase /><span>SQL</span></li>
                                <li><GrMysql /><span>MySQL</span></li>

                                {/* <li><FaWindows /><span>Windows</span></li>
                                <li><FaFileWord /><span>Word</span></li>
                                <li><FaFileExcel /><span>Excel</span></li>
                                <li><FaFilePowerpoint /><span>Powerpoint</span></li>
                                <li><SiConstruct3 /><span>Construct 3</span></li> */}
                            </ul>
                        </div>
                    </div>
                </Particulas>
            </div>
            <Footer />
        </div>
    )
}