import React from 'react'
import ResumeDL from './ResumeDL'
import './resume.css'
import { TiHtml5 } from 'react-icons/ti'
import { TbBrandJavascript } from 'react-icons/tb'
import { TbBrandCss3 } from 'react-icons/tb'
import { VscGithub } from 'react-icons/vsc'
import { GrNode } from 'react-icons/gr'
import { SiPostgresql } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiExpress } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiDjango } from 'react-icons/si'
import { SiMiro } from 'react-icons/si'
import { SiSlack } from 'react-icons/si'
import { SiBootstrap } from 'react-icons/si'
import { SiDocker } from 'react-icons/si'
import { SiSass } from 'react-icons/si'
import { SiMicrosoftoffice } from 'react-icons/si'

const Resume = () => {
  return (
    <section id="resume">
      <h1 className='section_header'>My Resume</h1>
      <div className='container resume_container'>
        <div className='full_name'>
          <h2>Elijah Kubes</h2>
        </div>
        <div className='contact_info'>
          <h5>Salem, OR</h5>
          <h5>(971)-707-3766</h5>
          <h5>kubeshauseli17@gmail.com</h5>
        </div>
        <div className='experience'>
          <h3 className='exp'>Experience</h3>
          <div className='experience_1'>
            <h3 className='company_info'>Eugene Sign and Awning Co.  |  Eugene, OR   |   Apprentice Sign Installer</h3>
            <h5 className='employment_length'>2019-2022</h5>
            <li className='li'>Eye for detail, installing customers signs and satisfying their needs before they signed off on job completion</li>
            <li className='li'>Problem solving, on every install. I.E. (modifying signs for proper support, power, sign placement, local building codes, ect)</li>
            <li className='li'>Communication skills. (Planning the install with my journeyman on the job, explaining what was going to happen to the business owner, ect)</li>
          </div>
          <div className='experience_2'>
            <h3 className="company_info">Meyer Sign Co.  |  Tigard, OR   |   Apprentice Sign Installer</h3>
            <h5 className='employment_length'>2017-2019</h5>
            <li className='li'>Eye for detail, installing customers signs and satisfying their needs before they signed off on job completion</li>
            <li className='li'>Problem solving, on every install. I.E. (modifying signs for proper support, power, sign placement, local building codes, ect)</li>
            <li className='li'>Communication skills. (Planning the install with my journeyman on the job, explaining what was going to happen to the business owner, ect)</li>
          </div>
          <div className='experience_3'>
            <h3 className="company_info">United Parcel Service  |  Tualatin, OR   |   Delivery Driver</h3>
            <h5 className='employment_length'>2013-2016</h5>
            <li className='li'>Worked hard to meet delivery commitments and satisfy customers' needs</li>
            <li className='li'>Problem solving traffic patterns and traffic jams on my route to meet delivery commitments</li>
            <li className='li'>Sales. Made new business customers from talking to Shipping and Receiving managers on the routes I was delivering</li>
          </div>
          <div className='experience_4'>
            <h3 className="company_info">United Parcel Service  |  Tualatin, OR   |   Package Loader</h3>
            <h5 className='employment_length'>2007-2013</h5>
            <li className='li'>Worked hard to split a conveyor belt of packages to their appropriate sides and loaded 3 package trucks</li>
            <li className='li'>Loaded packages efficently and accuately so the drivers could easily find them and everything fit</li>
            <li className='li'>Loaded overweight (70-200lbs) packages onto the conveyor belt</li>
          </div>
        </div>
        <div className='education'>
          <h3 className='ed'>Education</h3>
          <h3 className='school_name'>General Assembly</h3>
          <h5 className='employment_length'>Aug 2022 - Oct 2022</h5>
          <h3 className='class_info'>Software Engineering Immersive Online</h3>
          <li className='li'>12 week fully immersive training program, providing a deep dive into the world of Software Engineering and Web Development.
            Teaches the basics of coding in Javascript, HTML, CSS, React, Python, SQL, and the foundations of Computer Theory to students</li>
        </div>
      </div>
      <div className='skills_container'>
        <div className='container technical_skills'>
          <h2 className='skills_name'>Technical Skills</h2>
          <h5 className='technical_details'>HTML <TiHtml5 className='logo'/> Javascript <TbBrandJavascript className='logo'/> CSS <TbBrandCss3 className='logo'/> Docker <SiDocker className='logo'/></h5>
          <h5 className='technical_details'>Git <VscGithub className='logo'/> Node.js <GrNode className='logo'/> Postgres <SiPostgresql className='logo'/> Sass <SiSass className='logo'/></h5>
          <h5 className='technical_details'>Python <SiPython className='logo'/> React <TbBrandReactNative className='logo'/> Next.js <TbBrandNextjs className='logo'/> Miro <SiMiro className='logo'/></h5>
          <h5 className='technical_details'>Express <SiExpress className='logo'/> MongoDB <SiMongodb className='logo'/> Django <SiDjango className='logo'/> Slack <SiSlack className='logo'/></h5>
          <h5 className='technical_details'>Microsoft Office <SiMicrosoftoffice className='logo'/> Bootstrap <SiBootstrap className='logo'/></h5>
        </div>

        <div className='container personal_skills'>
          <h2 className='skills_name'>Personal Skills</h2>
          <h5 className='personal_details'>Collabaration / Team Work | Attention to Detail</h5>
          <h5 className='personal_details'>Work Ethic | Time Management | Communication</h5>
          <h5 className='personal_details'>Problem Solving Skills | Adaptability | Patience</h5>
        </div>
      </div>
      <ResumeDL  className="resume_dl"/>
    </section>
  )
}

export default Resume