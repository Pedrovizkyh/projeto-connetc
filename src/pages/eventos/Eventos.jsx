import React from 'react'
import s from '../../styles/pages.module.scss'
import Palestra from '../../assets/imagens/eventos/palestra.png'
import Programadores from '../../assets/imagens/eventos/programadores.jpg'
import Pessoas from '../../assets/imagens/eventos/roda-de-pessoas.jpg'

export default function Doacao() {
  return (
    <>
      <main>
        <section className={s.section_main}>
          <h2>Eventos & Palestras</h2>
        <div className={s.articles_main}>
          <article>
            <img src={Pessoas} alt="" />
            <h3>Empoderando Jovens para o Futuro</h3>
            <p>Atividade: Palestra motivacional sobre liderança jovem e transformação social.</p>
            <p>Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades.</p>
            <button>Quero Doar</button>
          </article>
          <div className={s.linha}></div>
          <article>
            <img src={Programadores} alt="" />
            <h3>Tecnologia que Transforma</h3>
            <p>Atividade: Workshop de introdução à programação e inovação digital.</p>
            <p>Impacto: Preparar jovens para o mercado de trabalho através da tecnologia.</p>
            <button>Quero Doar</button>
          </article>
          <div className={s.linha}></div>
          <article>
            <img src={Palestra} alt="" />
            <h3>Carreira e Primeiro Emprego</h3>
            <p>Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado.</p>
            <p>Impacto: Ajudar jovens a conquistar oportunidades de trabalho.</p>
            <button>Quero Doar</button>
          </article>
        </div>
        </section>
      </main>
      

    </>
  )
}
