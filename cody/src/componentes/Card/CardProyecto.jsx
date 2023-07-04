import React from 'react'
import proyecto from '/Users/Usuario/about-us/src/imagenes/proyecto.jpg'

function CardProyecto() {
  return (
    <div className= "card">
    <img src={proyecto} alt="" />
    <div className='car d-body'>
       <h4 className='card-title'>titulo</h4>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque veniam quidem officiis voluptate quasi eaque cupiditate. Ab corrupti, numquam facilis et perferendis voluptatum porro aut. Perspiciatis voluptates repudiandae debitis ipsam.</p>
       <a href="#!" className='btn bnt-outline-secondary rounded-0'>
                go to this web 
            </a>
    </div>
</div>
  )
}

export default CardProyecto
