import { List, X } from "@phosphor-icons/react"
import { useState } from "react"
import { Link } from 'react-router-dom'
import styles from "../components/Home.module.css"

function Header() {
    const [abrirMenu, setAbrirMenu] = useState(false)
    function handleAbrirFecharMenu() {
        if (abrirMenu === true) {
            setAbrirMenu(false)
            return
        }
        setAbrirMenu(true)
    }
    return (
        <body>
            <header className={styles.header}>
                <div className={styles.mobile}>
                    <div className={styles.menu_logo}>
                        <button onClick={handleAbrirFecharMenu}>
                            {
                                abrirMenu === true ? (
                                    <X size={32} />
                                ) : (
                                    <List size={32} />
                                )
                            }
                        </button>
                        <div>
                            <img src="../public/logo.png" alt="Logo" />
                        </div>
                    </div>
                    <div className={`${styles.options} ${abrirMenu === true && styles.open}`}>
                        <nav>
                            <Link to={"/Objetivo"}>Objetivo</Link>
                            <Link to={"/Componentes"}>Componentes</Link>
                            <Link to={"/Funcionamento"}>Funcionamento</Link>
                        </nav>
                    </div>
                </div>
                <div className={styles.desktop}>
                    <div>
                        <img src="../public/logo.png" alt="Logo" />
                    </div>
                    <div>
                        <nav className={styles.desktop_options}>
                            <a href="#Objetivo">Objetivo</a>
                            <a href="#Componentes">Componentes</a>
                            <a href="#Funcionamento">Funcionamento</a>
                            <a href="#Criadores">Criadores</a>
                        </nav>
                    </div>
                </div>
            </header>
            <div className={styles.wrapper}>
                <main>

                    <section className={styles.parallax_one}>
                        <h1>ANTI SLEEP GLASSES</h1>
                        <p>Para saber mais, role para baixo ou clique em um dos itens a cima.</p>
                        <div className={styles.oculos}>
                            <img src="../public/oculos.png" alt="anti-sleep-glasses" />
                        </div>
                    </section>

                    <section id="Objetivo" className={styles.module_content}>
                        <div className={styles.container}>
                            <h2>Qual o objetivo e o público alvo do nosso projeto?</h2>
                            <p>
                                Nós vimos que nos últimos anos ocorreram muitos acidentes de trânsito, então decidimos criar o "Anti Sleep Glasses",
                                que traduzindo, fica "Óculos Anti sono". O intuito do nosso projeto é fazer com que o motorista não durma. Outra situação
                                muito comum e que nosso óculos pode ser muito funcional é quando uma pessoa está com sono e quer continuar estudando.
                            </p>
                        </div>
                        <div className={styles.imagens}>
                            <div className={styles.motorista}>
                                <img src="../public/motorista.jpg" alt="motorista" />
                            </div>
                            <div className={styles.estudante}>
                                <img src="../public/estudante2.png" alt="estudante" />
                            </div>
                        </div>
                    </section>

                    <section id="Componentes" className={styles.parallax_two}>
                        <h1>Componentes usados no projeto</h1>
                        <div className={styles.imagenscomponentes}>
                            <div className={styles.oculosprotecao}>
                                <img src="../public/oculosprotecao.jpg" alt="oculos de proteção" />
                            </div>
                            <div className={styles.arduino}>
                                <img src="../public/arduinopromini.jpg" alt="arduino pro mini" />
                            </div>
                            <div className={styles.sensor}>
                                <img src="../public/sensor.jpeg" alt="sensor infravermelho" />
                            </div>
                            <div className={styles.botao}>
                                <img src="../public/botao.jpeg" alt="botão liga desliga" />
                            </div>
                            <div className={styles.buzzer}>
                                <img src="../public/buzzer.jpeg" alt="buzzer" />
                            </div>
                            <div className={styles.bateria}>
                                <img src="../public/bateria37.jpeg" alt="bateria 3.7v" />
                            </div>
                        </div>
                    </section>

                    <section id="Funcionamento" className={styles.module_content}>
                        <div className={styles.container}>
                            <h2>Como vai funcionar?</h2>
                            <p>O funcionamento é muito simples! Primeiramente, temos que ligá-lo. Depois de ligado, é só coloca-lo que está pronto para o uso. Quando a pessoa fechar o olho por 2 segundos, o buzzer irá apitar, fazendo com que o usuário acorde.</p>
                            <p>Fique com a demonstração.</p>
                        </div>
                    </section>

                    <section id="Criadores" className={styles.parallax_three}>
                        <h1>Criadores do projeto</h1>
                        <div className={styles.imagenscriadores}>
                            <div className={styles.giovanna}>
                                <img src="../giovanna.jpg" alt="foto da giovanna" />
                                <p>Giovanna</p>
                            </div>
                            <div className={styles.pablo}>
                                <img src="../pablo2.jpeg" alt="foto da pablo" />
                                <p>Pablo</p>
                            </div>
                            <div className={styles.paulo}>
                                <img src="../paulo.jpg" alt="foto da paulo" />
                                <p>Paulo</p>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </body>
    )
}

export default Header