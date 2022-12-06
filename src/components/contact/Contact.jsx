import React from 'react'
import './contact.css'
import {MdAttachEmail} from 'react-icons/md'
import {FiPhoneIncoming} from 'react-icons/fi'
import {BsChatTextFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">

      <div className='container contact_container'>
      <h1 className='section_header'>Contact Me</h1>
        <div className='contact_options'>
          <article className='contact_option'>
            <h3 className='contact_method'>Email <MdAttachEmail className='icon'/></h3>
            <a href="mailto:kubeshauseli17@gmail.com" target="_blank">Send me an Email</a>
          </article>
          <article className='contact_option'>
            <h3 className='contact_method'>Phone <FiPhoneIncoming className='icon'/></h3>
            <a href="tel:971-707-3766" target="_blank">Give me a Call</a>
          </article>
          <article className='contact_option'>
            <h3 className='contact_method'>Text <BsChatTextFill className='icon'/></h3>
            <a href="sms:971-707-3766" target="_blank">Shoot me a Text</a>
          </article>
        </div>
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact