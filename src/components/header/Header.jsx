import s from "./header.module.scss"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"

export default function Header() {
  return (
    <>
          <header>
            <Link to={"/"}>
              <img className={s.imgLogo} src={logo} alt="Imagem de logo do projeto connect sendo representada por uma mão segurando um coração, simbolizando apoio" />
            </Link>

            <nav className={s.nav}>
            <Link className={s.Link} to={"/doacao"}>Doação</Link>
            <Link className={s.Link} to={"/voluntariado"}>Voluntariado</Link>
            <Link className={s.Link} to={"/mentoria"}>Mentoria</Link>
            <Link className={s.Link} to={"/eventosEP"}>Eventos</Link>
            </nav>
          </header>
    </>
  )
}
