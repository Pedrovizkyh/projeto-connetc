import React from 'react'
import s from '../../styles/pages.module.scss'
import Reciclavel from '../../assets/imagens/voluntariado/caixas-reciclaveis.png'
import Computador from '../../assets/imagens/voluntariado/pessoas-no-computador.jpg'
import Exercitando from '../../assets/imagens/voluntariado/pessoas-se-exercitando.jpg'

export default function Voluntario() {
 return (
    <>
      <main>
        <section className={s.section_main}>
          <h2>Voluntariado</h2>
        <div className={s.articles_main}>
          <article>
            <img src={Reciclavel} alt="" />
            <h3>Mutirão de reciclagem</h3>
            <p>Coletar materiais recicláveis e orientar sobre descarte consciente.</p>
            <button>Quero Doar</button>
          </article>
          <div className={s.linha}></div>
          <article>
            <img src={Computador} alt="" />
            <h3>Aulas de Tecnologia</h3>
            <p>Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.</p>
            <button>Quero Doar</button>
          </article>
          <div className={s.linha}></div>
          <article>
            <img src={Exercitando} alt="" />
            <h3>Esporte e Inclusão</h3>
            <p>Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.</p>
            <button>Quero Doar</button>
          </article>
        </div>
        </section>
      </main>
    </>
  )
}
