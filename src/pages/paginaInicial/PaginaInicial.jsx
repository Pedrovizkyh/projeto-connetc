import React from 'react'
import s from './paginaInicial.module.scss'
import Img_maos from '../../assets/imagens/img_maos.png'
import Seta from '../../assets/icones/seta.png'

export default function PaginaInicial() {
  return (
    <>
    <section>
      <div className={s.principal}>
        <h1>Projetos Sociais que transformam</h1>
        <p className={s.texto}>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>
        <button>Cadastrar empresa <img src={Seta} alt="" /></button>
        
        <div className={s.articles}>
          <article>
            <h2>500+</h2>
            <p>Empresas Voluntárias</p>
          </article>
          <article>
            <h2>1.2K+</h2>
            <p>Projetos Realizados</p>
          </article>
          <article>
            <h2>50K+</h2>
            <p>Vidas Impactadas </p>
          </article>
        </div>
      </div>

      <img src={Img_maos} />
    </section>
    </>
  )
}
