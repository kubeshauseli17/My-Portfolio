import React from 'react'
import './header.css'
import me from '../../assets/me.png'

const Header = () => {

  return (
    <section id="header">
      <div className="container header_container">
        <div className='header_txt'>
          <h4 className='opening'>Hello I'm</h4>
          <h1 className='my_name'>Elijah Kubes</h1>
          <h4 className="job">Software Engineer</h4>
        </div>
        <div className='me'>
          <img src={me} alt="Elijah Kubes" />
        </div>
      </div>
    </section>
  )
}

export default Header