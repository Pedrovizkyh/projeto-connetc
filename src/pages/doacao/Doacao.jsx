import React from 'react'
import s from './doacao.module.scss'
import Caixas from '../../assets/imagens/doacao/carregando-caixas.jpg'
import Livros from '../../assets/imagens/doacao/livros.jpg'
import Computador from '../../assets/imagens/doacao/computador-aberto.jpg'

export default function Doacao() {
  return (
    <>
      <main>
        <section className={s.section_main}>
          <h2>Doação</h2>
        <div className={s.articles_main}>
          <article>
            <img src={Caixas} alt="" />
            <h3>Instituto grande familia</h3>
            <p>Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.</p>
            <button>Quero Doar</button>
          </article>
          <div className={s.linha}></div>
          <article>
            <img src={Livros} alt="" />
            <h3>Projeto Futuro na Escola</h3>
            <p>Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.</p>
            <button>Quero Doar</button>
          </article>
          <div className={s.linha}></div>
          <article>
            <img src={Computador} alt="" />
            <h3>Instituto Conecta Jovem</h3>
            <p>Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades.</p>
            <button>Quero Doar</button>
          </article>
        </div>
        </section>
      </main>
      

    </>
  )
}
