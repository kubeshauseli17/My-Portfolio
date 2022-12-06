import React from 'react'
import {VscGithub} from 'react-icons/vsc'
import {FiLinkedin} from 'react-icons/fi'


const Socials = () => {
  return (
    <div className='socials'>
        <a href="https://github.com" target="_blank"><VscGithub className='logo'/></a>
        <a href="https://linkedin.com" target="_blank"><FiLinkedin className='logo'/></a>
    </div>
  )
}

export default Socials