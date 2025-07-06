import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const projects = [
    {
      title: "My_Mechanic_Shop_API",
      description: "A RESTful API for managing a mechanic shop's operations, including customers, mechanics, inventory, and service tickets.",
      link: "https://github.com/jarr8217/My_Mechanic_Shop_API.git"
    },
    {
      title: "Todo List",
      description: "A simple todo list app with local storage support.",
      link: "https://github.com/jarr8217/Todo-list-App.git"
    },
    {
      title: "Ecommerce_api",
      description: "E-commerce API that supports managing customers, products, and orders with proper database relationships and JSON serialization.",
      link: "https://github.com/jarr8217/Ecommerce_api.git"
    }
  ];

  const experience = [
    {
      company: "Coding Temple",
      role: "Apprentice Developer",
      duration: "Feb 2025 – Present",
      description: "Full-stack development apprenticeship focusing in Full Stack HTML, CSS, JavaScript, React, Python, Flask, SQLAlchemy, MySQL, and Postman.",
    },
    {
      company: "Web Solutions",
      role: "Intern Developer",
      duration: "Jun 2022 – Dec 2022",
      description:
        "Assisted in building landing pages and improving UX/UI design.",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="p-8 max-w-4xl mx-auto font-sans">
        <h1 className="text-3xl font-bold mb-6">My Portfolio</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="space-y-4">
            {projects.map((project, index) => (
              <li key={index} className="border p-4 rounded-xl shadow">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-2 inline-block"
                >
                  View Project
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <ul className="space-y-4">
            {experience.map((job, index) => (
              <li key={index} className="border p-4 rounded-xl shadow">
                <h3 className="text-xl font-bold">{job.role} @ {job.company}</h3>
                <p className="italic">{job.duration}</p>
                <p>{job.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

    </>
  )
}

export default App
