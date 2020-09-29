import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function NavBar() {

  return(
      <React.Fragment>
        <nav className='nav'>
          <div className='link'> <Link to='/questions'> <button className='linkbutton-left'> View All Questions  </button> </Link> </div>
          <div className='link'> <Link to='/information'> <button className='linkbutton-right'> View Info  </button> </Link> </div>
      </nav>
      </ React.Fragment>
  )
}

export default NavBar
