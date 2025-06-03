// src/components/Navbar.jsx
import React, { useState } from 'react';
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Eshop</a>
    <button class="navbar-toggler" onClick={handleToggle} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     {
      showMenu ? <i class="bi bi-x-lg"></i>:<span class="navbar-toggler-icon"></span>
     }
      
    </button>
    <div class={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
       <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
      </ul>
     <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="bi bi-person"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="bi bi-bag"></i></a>
        </li>
       <li class="nav-item">
          <a class="nav-link" href="#"><i class="bi bi-search"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
