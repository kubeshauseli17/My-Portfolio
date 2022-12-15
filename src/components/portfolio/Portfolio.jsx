import React from 'react';
import './portfolio.css'
import p4_pic from '..//..//assets/p4_pic.png';
import p3_pic from '..//..//assets/p3_pic.png';
import p2_pic from '..//..//assets/p2_pic.png';
import p1_pic from '..//..//assets/p1_pic.png';

const portfolio_data = [
  {
    id: 1,
    image: p1_pic,
    project_name: "Project 1 Javascript Battleship",
    p1: "Everyone's favorite tabletop classic Battleship brought to your screen. I built this game through DOM manipulation with Javascript. I planned out all of the winning combinations and programmed in win scenarios and validation for selected plays.",
    p2: "HTML, CSS, JavaScript",
    demo: "https://kubeshauseli17.github.io/Project-1-Battleship-/",
    github: "https://github.com/kubeshauseli17/Project-1-Battleship-",
  },
  {
    id: 2,
    image: p2_pic,
    project_name: "Project 2 Javascript, Express & Postgres based Hockey Forum",
    p1: "A hockey forum where hockey fans can post threads and comments about their favorite teams, hockey news, and current games. Full CRUD implementation for Users, Threads, and Comments. Standings and scores integrated from the NHL API.",
    p2: "HTML, CSS/Bootstrap, Node.js, Express, EJS, Postgres, Miro, NHL API",
    demo: "https://project2-kubeshauseli17.koyeb.app/",
    github: "https://github.com/kubeshauseli17/project2-Hockey-forum",
  },
  {
    id: 3,
    image: p3_pic,
    project_name: "Project 3 React, Nodejs & MongoDB based Photo Blog and Social Media site",
    p1: "A photo journal for users to post their memories and to reflect on their thoughts about their day. Fellow users who are your friends also are able to see and comment on your public memories. Memories are fully CRUDable.",
    p2: "HTML, CSS/Tailwind, Node.js, Express, React, MongoDB, Miro, Slack, Cloudinary API",
    demo: "https://superb-parfait-91c6b9.netlify.app/",
    github: "https://github.com/JamesOnwordi/memories_client",
  },
  {
    id: 4,
    image: p4_pic,
    project_name: "Project 4 Django & Postgres based Ecommerce site",
    p1: "A Django based E-commerce site (currently) that I would like to build into a ETSY like E-commerce hub. Where users can create their own stores and customize their store front. As it stands right now its a E-commerce store that I customized for myself and a side hustle of mine.",
    p2: "HTML, CSS, Django, Bootstrap, Postgres, SQLite3, Paypal",
    demo: "https://p4-ecommerce.herokuapp.com/",
    github: "https://github.com/kubeshauseli17/Project-4",
  }
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1 className='section_header'>My Portfolio</h1>

      <div className='container portfolio_container'>
        {
          portfolio_data.map(({id, image, project_name, p1, p2, demo, github}) => {
            return (
              <article key={id} className='portfolio_project'>
              <div className='portfolio_image'>
                  <img src={image} alt={project_name} />
                </div>
                <h3 className='project_title'>{project_name}</h3>
                <p className='p1'>{p1}</p>
                <p>
                  -Technologies used-
                </p>
                <p className='p2'>{p2}</p>
                <div className='portfolio_links'>
                  <a href={demo} className='btn btn-primary' target="_blank">Demo</a>
                  <a href={github} className='btn' target="_blank">Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
