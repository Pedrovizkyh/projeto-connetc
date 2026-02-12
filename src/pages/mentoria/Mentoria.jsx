import React from 'react'
import s from '../../styles/pages.module.scss'
import Mulheres from '../../assets/imagens/mentoria/mulheres-conversando.png'
import Papelada from '../../assets/imagens/mentoria/papelada.jpg'
import Pessoas from '../../assets/imagens/mentoria/pessoas-conversando.png'

export default function Doacao() {
  return (
    <>
      <main>
        <section className={s.section_main}>
          <h2>Mentoria</h2>
        <div className={s.articles_main}>
          <article>
            <img src={Papelada} alt="" />
            <h3>Mentoria de Carreira e Emprego</h3>
            <p>Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho.</p>
            <button>Quero Doar</button>
          </article>
          <div className={s.linha}></div>
          <article>
            <img src={Pessoas} alt="" />
            <h3>Compartilhe Experiência</h3>
            <p>Oriente jovens e profissionais iniciantes em sua área.</p>
            <button>Quero Doar</button>
          </article>
          <div className={s.linha}></div>
          <article>
            <img src={Mulheres} alt="" />
            <h3>Acompanhamento</h3>
            <p>Participe como guia em jornadas de aprendizado e desenvolvimento.</p>
            <button>Quero Doar</button>
          </article>
        </div>
        </section>
      </main>
      

    </>
  )
}
