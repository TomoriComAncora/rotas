import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div>
      <header>
        <nav>
            <h1>Navegação</h1>
          <ul className="menu">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/sobre"}>Sobre</Link>
            </li>
            <li>
              <Link to={"/contato"}>Contato</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
