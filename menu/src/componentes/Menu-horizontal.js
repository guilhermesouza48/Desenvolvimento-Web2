import React from "react"
import './Menu-horizontal.css'

export default function Menu(){
    return(
        <div>
            <div  className="menu">
                <nav className="navMenu">
                    <ul>
                        <li><a href="#inicio">Home</a></li>
                        <li><a href="#cursos">Cursos</a></li>
                        <li><a href="#contatos">Contatos</a></li>
                        <li><a href="#parceiros">Parceiros</a></li>
                        <li><a href="#missao">Nossa Missão</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                    </ul>
                </nav>

                <section id="inicio">
                    <h1>Início</h1>
                </section>

                <section id="cursos">
                    <h1>Cursos</h1>
                </section>

                <section id="contatos">
                    <h1>Contatos</h1>
                </section>

                <section id="parceiros">
                    <h1>parceiros</h1>
                </section>

                <section id="missao">
                    <h1>Nossa Missão</h1>
                </section>

                <section id="sobre">
                    <h1>Sobre</h1>
                </section>

            </div>
        </div>
    )
}