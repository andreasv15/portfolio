import React from 'react'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';

function Proyectos() {
  return (
    <section class="resume-section" id="proyectos">
        <div class="resume-section-content">
            <h2 class="mb-5">Proyectos</h2>
            <div class="d-flex justify-content-around flex-wrap">
            <div class="card" style={{width: "18rem"}}>
                <img src="/ironspace-game.png" class="card-img-top img-fluid" alt="IronSpace Game" style={{maxHeight: "200px"}} />
                <div class="card-body">
                    <h5 class="card-title"> IronSpace Game! </h5>
                    <p class="card-text">
                        Consiste en disparar tantos obstáculos como sea posible, ¡pero intenta no dejar que pasen de tu nave para evitar perder puntos!
                    </p>
                    <div class="d-flex justify-content-center">
                    <AwesomeButton target="_blank" href="https://andreasv15.github.io/ironhack-space/" type="primary">Demo</AwesomeButton>

                        {/* <a target="_blank" href="https://andreasv15.github.io/ironhack-space/" class="btn btn-primary">Demo</a> */}
                    </div>
                    <hr />
                    <div class="d-flex justify-content-center">
                    <AwesomeButton target="_blank" href="https://github.com/andreasv15/ironhack-space" type="primary">Repositorio</AwesomeButton>

                        {/* <a target="_blank" href="https://github.com/andreasv15/ironhack-space" class="btn btn-primary">Repositorio</a> */}
                    </div>

                </div>
                </div>

                <div class="card" style={{width: "18rem"}}>
                    <img src="/top-games.png" class="card-img-top img-fluid" alt="..." style={{maxHeight: "200px"}} />
                    <div class="card-body">
                        <h5 class="card-title">Top-Games</h5>
                        <p class="card-text">Plataforma donde están alojados los juegos desarrollados por los alumnos y alumnas de mi promoción de Ironhack.</p>
                        <div class="d-flex justify-content-center">
                            <AwesomeButton target="_blank" href="https://games-portal.herokuapp.com/">Demo</AwesomeButton>
                        </div>
                        <hr />
                        <div class="d-flex justify-content-center">
                            <AwesomeButton target="_blank" href="https://github.com/andreasv15/minigames-portal">Repositorio</AwesomeButton>
                        </div>
                    </div>
                </div>

                <div class="card" style={{width: "18rem"}}>
                    <img src="cylMap.png" class="card-img-top img-fluid" alt="..." style={{maxHeight: "180px"}} />
                    <div class="card-body">
                        <h5 class="card-title">TripAdvisor CyL</h5>
                        <p class="card-text">Web de restaurantes de CyL recomendados.</p>
                        <div class="d-flex justify-content-center">
                            <AwesomeButton target="_blank" href="https://tripadvisorcyl.netlify.app/" >Demo</AwesomeButton>
                        </div>
                        <hr />
                        <div class="d-flex justify-content-center">
                            <AwesomeButton target="_blank" href="https://github.com/andreasv15/mapCyL-server" >Repositorio Servidor</AwesomeButton>
                        </div>
                        <br />
                        <div class="d-flex justify-content-center">
                            <AwesomeButton target="_blank" href="https://github.com/andreasv15/mapcyl-client" >Repositorio Cliente</AwesomeButton>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
  )
}

export default Proyectos