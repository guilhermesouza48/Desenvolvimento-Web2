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

                    <aside className="aside">                   
                        <a href="#inicio" id="inicio2"> Nosso Canal</a>
                        <a href="#cursos" id="cursos2">Cursos</a>
                        <a href="#contatos" id="contatos2">Contatos</a>
                        <a href="#parceiros" id="parceiros2">Parceiros</a>
                        <a href="#missao" id="missao2">Missão</a>
                        <a href="#sobre" id="sobre2">Sobre</a>
                    </aside>
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
                
                <a className="Top" href=".menu">Topo</a>
                <a className="irCursos" href="#cursos">Cursos</a>
                <a className="irContatos" href="#contatos">Contatos</a>
                <a className="irParceiros" href="#parceiros">Parceiros</a>
                <a className="irMissao" href="#missao">Missão</a>
                <a className="irSobre" href="#sobre">Sobre</a>

                <footer>
                    <h2>rodapé</h2>
                </footer>

            </div>
        </div>
    )
}