import React from 'react'
import resume from '../../assets/Elijah_Kubes_resume.pdf'

const ResumeDL = () => {
  return (
    <div className='resume_dl'>
        <a href={resume} download className='btn'>Download Resume</a>
    </div>
  )
}

export default ResumeDL