
import React from 'react';
import Form from './Form';

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Viva la pepa</a>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
      </ul>
      <Form contBuscar="Productos"/>
    </div>
  </div>
</nav>


    </>
  );
}

export default Navbar;
