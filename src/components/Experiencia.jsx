import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

function Experiencia() {
  return (
    <section class="resume-section" id="experience">
        <div class="resume-section-content">
            <h2 class="mb-5">Experiencia</h2>

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 205, 105)', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 205, 105)' }}
                    date="Diciembre 2022 - Actualidad"
                    iconStyle={{ background: 'rgb(255, 205, 105)', color: '#fff' }}
                    icon={<i class="fa-solid fa-briefcase"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Desarrolladora web fullstack</h3>
                    <h4 className="vertical-timeline-element-subtitle">Telefónica España</h4>
                    <p>
                        <ul>
                            <li>Desarrollo de nuevas funcionalidades en lenguaje Java para aplicación web interna (Backend).</li>
                            <li>Desarrollo de nuevas funcionalidades en lenguaje PrimeFaces para aplicación web interna (Frontend).</li>
                            <li>Resolución de errores en la aplicación web reclamadas.</li>
                            <li>Curso formativo de PrimeFaces.</li>
                            <li>Administración de Bases de Datos.</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 205, 105)', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 205, 105)' }}
                    date="Octubre 2021 - Diciembre 2021"
                    iconStyle={{ background: 'rgb(255, 205, 105)', color: '#fff' }}
                    icon={<i class="fa-solid fa-briefcase"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Desarrolladora web</h3>
                    <h4 className="vertical-timeline-element-subtitle">Pixel Innova (prácticas)</h4>
                    <p>
                        <ul>
                            <li>Desarrollo de plugins en lenguaje PHP.</li>
                            <li>Redirecciones URL de sitios web antiguos a nuevos.</li>
                            <li>Curso formativo de Kotlin.</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 205, 105)', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 205, 105)' }}
                    date="Septiembre 2020 - Marzo 2021"
                    iconStyle={{ background: 'rgb(255, 205, 105)', color: '#fff' }}
                    icon={<i class="fa-solid fa-briefcase"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Responsable de proyecto "Protagonistas"</h3>
                    <h4 className="vertical-timeline-element-subtitle">FAPAS CyL</h4>
                    <p>
                        <ul>
                            <li>Realización de sensibilizaciones sobre la discapacidad auditiva en los colegios.</li>
                            <li>Ayuda a los profesionales en el desarrollo de sus actividades.</li>
                            <li>Reparación de equipos informáticos.</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 205, 105)', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 205, 105)' }}
                    date="Noviembre 2017 - Marzo 2020"
                    iconStyle={{ background: 'rgb(255, 205, 105)', color: '#fff' }}
                    icon={<i class="fa-solid fa-briefcase"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Programadora Junior</h3>
                    <h4 className="vertical-timeline-element-subtitle">Indra</h4>
                    <p>
                        <ul>
                            <li>Análisis de pedidos de clientes de Telefónica e identificación de los problemas en el proceso de estos.</li>
                            <li>Tratamiento y resolución de incidencias en los pedidos a través de sentencias SQL.</li>
                            <li>Administración de Bases de Datos en entorno de Producción.</li>
                            <li>Regularizaciones masivas.</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 205, 105)', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 205, 105)' }}
                    date="Marzo 2017 - Mayo 2017"
                    iconStyle={{ background: 'rgb(255, 205, 105)', color: '#fff' }}
                    icon={<i class="fa-solid fa-briefcase"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Técnica Superior de Administración de Sistemas Informáticos en Red</h3>
                    <h4 className="vertical-timeline-element-subtitle">Indra (prácticas)</h4>
                    <p>
                        <ul>
                            <li>Parametrización.</li>
                            <li>Realización de conexiones remotas a ordenadores fuera de oficinas.</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 205, 105)', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 205, 105)' }}
                    date="Marzo 2014 - Mayo 2014"
                    iconStyle={{ background: 'rgb(255, 205, 105)', color: '#fff' }}
                    icon={<i class="fa-solid fa-briefcase"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Técnica en Sistemas Microinformáticos y Redes</h3>
                    <h4 className="vertical-timeline-element-subtitle">CGB Informática (prácticas)</h4>
                    <p>
                        <ul>
                            <li>Montaje de equipos informáticos.</li>
                            <li>Reparación de equipos informáticos.</li>
                            <li>Formateo y particiones de discos duros.</li>
                            <li>Instalación de S.O y software adicional necesario.</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<i class="fa-solid fa-star"></i>}
                />

            </VerticalTimeline>

            {/* <div class="d-flex flex-column flex-md-row justify-content-between mb-4">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Desarrolladora web de PHP</h3>
                    <div class="subheading mb-3">Pixel Innova (prácticas)</div>
                    <p>
                        <ul>
                            <li>Desarrollo de plugins en lenguaje PHP para su posterior uso en sitios web WordPress.</li>
                            <li>Redirecciones URL de sitios web antiguos a nuevos.</li>
                            <li>Curso formativo de Kotlin, lenguaje de programación de Android.</li>
                        </ul>
                    </p>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">Octubre 2021 - Diciembre 2021</span></div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-4">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Responsable de proyecto "Protagonistas"</h3>
                    <div class="subheading mb-3"> FAPAS CyL </div>
                    <p>
                        <ul>
                            <li>Realización de sensibilizaciones sobre la discapacidad auditiva en los colegios.</li>
                            <li>Ayuda a los profesionales en el desarrollo de sus actividades.</li>
                            <li>Reparación de equipos informáticos.</li>
                        </ul>
                    </p>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">Octubre 2020 - Marzo 2021</span></div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-4">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Programadora Junior</h3>
                    <div class="subheading mb-3">Indra</div>
                    <p>
                        <ul>
                            <li>Resolución de incidencias de clientes de Telefónica a través de sentencias SQL.</li>
                        </ul>
                    </p>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">Noviembre 2017 - Marzo 2020</span></div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-4">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Técnico Superior en Administración de Sistemas Informáticos en Red</h3>
                    <div class="subheading mb-3">Indra (Prácticas)</div>
                    <p>
                        <ul>
                            <li>Parametrización.</li>
                            <li>Realización de conexiones remotas a ordenadores fuera de oficinas.</li>
                        </ul>
                    </p>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">Marzo 2017 - Mayo 2017</span></div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-4">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Monitora en Ludoteca de Verano</h3>
                    <div class="subheading mb-3">Aspas Salamanca</div>
                    <p>
                        <ul>
                            <li>Ayudar a los profesionales en el desarrollo de actividades organizadas para niños con discapacidad auditiva.</li>
                        </ul>
                    </p>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">Julio 2016</span></div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-4">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Técnico en Sistemas Microinformáticos y Redes</h3>
                    <div class="subheading mb-3">CGB Informática (prácticas)</div>
                    <p>
                        <ul>
                            <li>Montaje de equipos informáticos.</li>
                            <li>Reparación de equipos informáticos.</li>
                            <li>Formateo y particiones de discos duros.</li>
                            <li>Instalación de S.O y software adicional necesario.</li>
                        </ul>
                    </p>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">Marzo 2014 - Mayo 2014</span></div>
            </div> */}
        </div>
    </section>
)
}

export default Experiencia