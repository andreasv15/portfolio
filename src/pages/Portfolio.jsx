import React from 'react'
import About from '../components/About'
import Educacion from '../components/Educacion'
import Experiencia from '../components/Experiencia'
import Navbar from '../components/Navbar'
import Proyectos from '../components/Proyectos'
import Skills from '../components/Skills'
import {BsFillArrowUpCircleFill } from 'react-icons/bs';
function Portfolio() {
  return (
    <div>
        <Navbar />
        <div class="container-fluid p-0">
            <About />
            <hr class="m-0" />
            <Experiencia />
            <hr class="m-0" />
            <Educacion />
            <hr class="m-0" />
            <Skills />
            <hr class="m-0" />
            <Proyectos />
            <hr class="m-0" />
            <div class="social-icons d-flex justify-content-center" style={{margin: "10px" }}>
                <a class="social-icon" href="#page-top"><BsFillArrowUpCircleFill /></a>
            </div>
        </div>
    </div>
  )
}

export default Portfolio