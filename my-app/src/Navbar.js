import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
   <nav>
    <Link to="/home" class="nav-ls">Home</Link>
    <Link to="/about"class="nav-ls">About</Link>
    <Link to="/blogs"class="nav-ls">Blogs</Link>

    
   </nav>
  )
}

export default Navbar
