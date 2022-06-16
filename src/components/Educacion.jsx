import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// https://www.npmjs.com/package/react-vertical-timeline-component

function Educacion() {
  return (
    // <section class="resume-section" id="education">
    //     <div class="resume-section-content">
    //         <h2 class="mb-5">Formación</h2>
    //         <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
    //             <div class="flex-grow-1">
    //                 <h3 class="mb-0">Ironhack</h3>
    //                 <div class="subheading mb-3">Bootcamp desarrollo web FullStack</div>
    //                 <div> Modalidad tiempo completo y en remoto </div>

    //             </div>
    //             <div class="flex-shrink-0"><span class="text-primary">Abril 2022 - Junio 2022</span></div>
    //         </div>
    //         <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
    //             <div class="flex-grow-1">
    //                 <h3 class="mb-0">CIFP Ponferrada</h3>
    //                 <div class="subheading mb-3">CFGS de Desarrollo de Aplicaciones Web</div>
    //                 <div> Modalidad distancia </div>
    //             </div>
    //             <div class="flex-shrink-0"><span class="text-primary">Octubre 2019 - Diciembre 2021</span></div>
    //         </div>
    //         <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
    //             <div class="flex-grow-1">
    //                 <h3 class="mb-0">IES Venancio Blanco</h3>
    //                 <div class="subheading mb-3">CFGS de Administración de Sistemas Informáticos en Red</div>
    //                 <div> Salamanca, Castilla y León </div>
    //             </div>
    //             <div class="flex-shrink-0"><span class="text-primary">Septiembre 2015 - Junio 2017</span></div>
    //         </div>
    //         <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
    //             <div class="flex-grow-1">
    //                 <h3 class="mb-0">IES Venancio Blanco</h3>
    //                 <div class="subheading mb-3">CFGM de Sistemas Microinformáticos y Redes</div>
    //                 <div> Salamanca, Castilla y León </div>
    //             </div>
    //             <div class="flex-shrink-0"><span class="text-primary">Septiembre 2012 - Junio 2014</span></div>
    //         </div>
    //     </div>
    // </section>
    <section class="resume-section" id="education">
        <div class="resume-section-content">
            <h2 class="mb-5">Formación</h2>

            <VerticalTimeline>
                {/* <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<i class="fa-solid fa-graduation-cap"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<i class="fa-solid fa-graduation-cap"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<i class="fa-solid fa-graduation-cap"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<i class="fa-solid fa-graduation-cap"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement> */}
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    contentStyle={{ color: 'black' }}
                    date="Abril 2022 - Junio 2022"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<i class="fa-solid fa-graduation-cap"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Desarrollo web FullStack</h3>
                    <h4 className="vertical-timeline-element-subtitle"> Bootcamp en tiempo completo y remoto </h4>
                    <p>
                    Ironhack
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ color: 'black' }}
                    date="Octubre 2019 - Diciembre 2021"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<i class="fa-solid fa-graduation-cap"></i>}
                >
                    <h3 className="vertical-timeline-element-title">TÉCNICO SUPERIOR EN DESARROLLO DE APLICACIONES WEB</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ciclo Formativo de Grado Superior</h4>
                    <p>
                    C.I.F.P. Ponferrada
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ color: 'black' }}
                    date="Septiembre 2015 - Junio 2017"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<i class="fa-solid fa-graduation-cap"></i>}
                >
                    <h3 className="vertical-timeline-element-title">TÉCNICO SUPERIOR EN ADMINISTRACIÓN DE SISTEMAS INFORMÁTICOS EN RED</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ciclo Formativo de Grado Superior</h4>
                    <p>
                    I.E.S. Venancio Blanco
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ color: 'black' }}
                    date="Septiembre 2012 - Junio 2014"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<i class="fa-solid fa-graduation-cap"></i>}
                >
                    <h3 className="vertical-timeline-element-title">TÉCNICO EN SISTEMAS MICROINFORMÁTICOS Y REDES</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ciclo Formativo de Grado Medio</h4>
                    <p>
                    I.E.S. Venancio Blanco
                    </p>
                </VerticalTimelineElement>                
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<i class="fa-solid fa-star"></i>}
                />
                </VerticalTimeline>

        </div>

        </section>

)
}

export default Educacion