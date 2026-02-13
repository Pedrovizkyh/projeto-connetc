import React from 'react'
import s from './usuario.module.scss'
import Pin from '../../assets/icones/usuario/pin.png'
import Email from '../../assets/icones/usuario/email.png'
import Calendario from '../../assets/icones/usuario/calendario.png'

export default function Usuario() {
  return (
    <>
    <main>
      <section className={s.caixa}>
        <div className={s.imagem}>
          <img src="https://i.pinimg.com/474x/f1/39/dc/f139dc89e5b1ad0818f612c7f33200a5.jpg" alt="" />
        </div>
        <div className={s.conteudo}>
          <div className={s.titulo}>
            <p className={s.nome}>Pedro Bastos</p>
            <p>Voluntário Ativo</p>
          </div>
          <p>Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>
          <div className={s.icones}>
            <article className={s.icone}>
              <img src={Pin} alt="" />
              <p>Cidade, Estado</p>
            </article>
            <article className={s.icone}>
              <img src={Email} alt="" />
              <p>Email</p>
            </article>
            <article className={s.icone}>
              <img src={Calendario} alt="" />
              <p>Membro desde Janeiro 2022</p>
            </article>
          </div>
          <div className={s.areas}>
            <article className={s.area}>
              <p>Educação</p>
            </article>
            <article className={s.area}>
              <p>Meio Ambiente</p>
            </article>
            <article className={s.area}>
              <p>Assistência Social</p>
            </article>
            <article className={s.area}>
              <p>Design</p>
            </article>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
