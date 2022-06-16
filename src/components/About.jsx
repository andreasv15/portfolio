import React from 'react'

function About() {
  return (
    <section class="resume-section" id="about">
        <div class="resume-section-content">
            <h1 class="mb-0">
                Andrea 
                <span class="text-primary"> Sánchez Velasco</span>
            </h1>
            <div class="subheading mb-5">
                {/* "Conóceme por mis habilidades, no por mi discapacidad" - Robert M. Hensel */}
                "Mi discapacidad no limita mis capacidades de seguir creciendo personalmente y profesionalmente"
            </div>
            <p class="lead mb-5">
            {/* I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. 
            Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. */}
                Nací y crecí en la ciudad de Salamanca. Mis pasiones son viajar, visitar restaurantes y disfrutar con mis amigos. 
                <br />
                Desde pequeña sentí mucha curiosidad por la tecnología. Por eso, tan pronto como pude empecé mis estudios relacionados 
                con la informática y en el camino descubrí el apasionante mundo de la programación. No lo dudé y seguí formándome 
                en ello hasta convertirme en una desarrolladora web fullstack.
                <br />
                Soy una persona comprometida y perseverante hasta dar con la solución del problema que se me presenta, son cualidades 
                que considero necesarias a la hora de trabajar en el mundo de la programación. ¡Y siempre abierta a aprender nuevos lenguajes!
            </p>

            <h2> ¿Hablamos? </h2>
            <div class="social-icons">
                <a class="social-icon" target="_blank" href="https://www.linkedin.com/in/andrea-sanchez-velasco/"><i class="fab fa-linkedin-in"></i></a>
                <a class="social-icon" target="_blank" href="https://github.com/andreasv15"><i class="fab fa-github"></i></a>
                <a class="social-icon" href="mailto:asv1994@hotmail.com"><i class="fa-solid fa-envelope"></i></a>
                <a class="social-icon" target="_blank" href="https://calendly.com/asv1994"><i class="fa-solid fa-calendar-days"></i></a>
            </div>


        </div>
    </section>
)
}

export default About