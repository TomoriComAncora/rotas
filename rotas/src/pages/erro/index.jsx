import React from 'react'
import { Link } from 'react-router-dom'

function Erro() {
  return (
    <div>
        <h1>Ops... Essa página não existe</h1>
        <span>Temos essas páginas aqui:</span><br/>
        <Link to={"/"}>Home</Link><br/>
        <Link to={"/sobre"}>Sobre</Link><br/>
        <Link to={"/contato"}>Contato</Link>
    </div>
  )
}

export default Erro