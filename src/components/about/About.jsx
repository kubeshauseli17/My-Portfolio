import React from 'react'
import './about.css'
import family from '../../assets/family.jpeg'

const About = () => {
  return (
    <section id="about">
      <h1 className='section_header'>About Me</h1>

      <div className="container about_me_container">
        <div className="family_image_container">
          <img src={family} alt="My family" className='family_image'/>
        </div>

        <div className='about_me_content'>
          <p className='p1'>Hi! I'm Elijah and I've recently become a Software Engineer. I graduated from General Assemblys Software Engineering Immersive course on Halloween.
            It really is amazing to reflect on the amount of knowledge I gained in Web Development over the course. Django, Javascript, React, Python, CSS, and
            HTML are just some of the technologies we learned a proficencey at in the course. As I continue my transition into this profession, I'm excited at 
            the thought of how much there still is to learn as an Engineer, aw well as room to grow as a developer and team mate on this journey.</p>
          <p className='p2'>Before choosing to make this transition, I had been in a trade as an apprentice Sign Installer for the last 5 years. The skills I had to learn in the
            trade where varied and mostly licenced (Electrical, Welding, Crane Operator's Licence, CDL, Concrete Work). I personally really valued the whole 
            experience of my apprenticeship, and all of the skills and knowledge imparted through the process of working my trade. A lifestyle change, a wonderful
            girlfriend and 2 kids ended up pushing me into this new direction in life. The one downside of my trade was unfortunately having to work out of town 
            for a week at a time consistently. Kinda rough when you have kids at home missing you. My girlfriend (Also a GA Grad!) made the suggestion to enrol in 
            an Immersive Bootcamp with GA and transition into another creative field. One where I'm still learning growing and building, Just one where I'm home 
            every night.</p>
          <p className='p3'>Looking ahead in this transition, overall I'm excited! I'm excited for my first job in Software. I'm excited to meet my future team mates. I'm excited 
            to mentor under and learn from my senior dev's. I'm excited to see what our team end's up building and what my part in that process will be. Lstly I'm 
            excited that the whole process (in my head at least, lol) appears oddly familiar to my apprenticeship. From the relationships and team built between my 
            Journeymen, coworkers, and I working to get projects done on time. To the mentor / mentee relationship between JR and Senior Devs being very similar to
            the Apprentice / Journeyman relationship. I'm hopeful this field will be as mentally stimulating, creative, and bonding as my last!</p>
        </div>
      </div>
    </section>
  )
}

export default About