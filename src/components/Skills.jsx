import React from 'react'
import { SiExpress, SiHandlebarsdotjs, SiMongodb, SiMysql } from 'react-icons/si';

function Skills() {
  return (
    <section class="resume-section" id="skills">
        <div class="resume-section-content">
            <h2 class="mb-5">Habilidades</h2>
            <div class="subheading mb-3">Lenguajes de programación, librerías y frameworks: </div>
            <ul class="list-inline dev-icons">
            
                <li class="list-inline-item"><i class="fab fa-html5" title="HTML5"></i></li>
                <li class="list-inline-item"><i class="fab fa-css3-alt" title="CSS3"></i></li>
                <li class="list-inline-item"><i class="fab fa-js-square" title="JavaScript"></i></li>
                <li class="list-inline-item"><i class="fa-brands fa-php" title="PHP"></i></li>
                <li class="list-inline-item"><i class="fab fa-react" title="React JS"></i></li>
                <li class="list-inline-item"><i class="fab fa-node-js" title="Node JS"></i></li>
                <li class="list-inline-item"><SiExpress title="Express JS" /> </li>
                <li class="list-inline-item"><SiHandlebarsdotjs title="Handlebars JS" /> </li>
                <li class="list-inline-item"><SiMongodb title="MongoDB / Mongoose" /> </li>
                <li class="list-inline-item"><i class="fa-brands fa-bootstrap" title="Bootstrap"></i></li>
                <li class="list-inline-item"><SiMysql title='MySQL' /></li>
                <li class="list-inline-item"><i class="fab fa-wordpress" title="WordPress"></i></li>
                <li class="list-inline-item"><i class="fa-brands fa-java" title="Java"></i></li>
            </ul>
            <div class="subheading mb-3">Control de versiones: </div>
                <ul class="list-inline dev-icons">
                    <li class="list-inline-item"><i class="fa-brands fa-git-square" title="Git"></i></li>
                    <li class="list-inline-item"><i class="fa-brands fa-github" title="GitHub"></i></li>
                    <li class="list-inline-item"><i class="fa-brands fa-bitbucket" title="BitBucket"></i></li>
                </ul>

            <div class="subheading mb-3"> Y otras como: </div>
            <ul class="fa-ul mb-0">
                <li>
                    <span class="fa-li"><i class="fas fa-check"></i></span>
                    Axios.
                </li>
                <li>
                    <span class="fa-li"><i class="fas fa-check"></i></span>
                    Diseño web responsive.
                </li>
                <li>
                    <span class="fa-li"><i class="fas fa-check"></i></span>
                    JSON.
                </li>
                <li>
                    <span class="fa-li"><i class="fas fa-check"></i></span>
                    Postman.
                </li>
                <li>
                    <span class="fa-li"><i class="fas fa-check"></i></span>
                    NpmJs.
                </li>
                <li>
                    <span class="fa-li"><i class="fas fa-check"></i></span>
                    ...
                </li>
            </ul>
        </div>
    </section>
)
}

export default Skills