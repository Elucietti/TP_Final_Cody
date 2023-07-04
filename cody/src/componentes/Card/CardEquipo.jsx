import React from 'react'
import equipo from '/Users/Usuario/about-us/src/imagenes/equipo.jpg'

function CardEquipo() {
      return (
    <div className='card'>
         <img src={equipo} alt="" />
         <div className='card-body'>
            <h4 className='card-title'>titulo</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque veniam quidem officiis voluptate quasi eaque cupiditate. Ab corrupti, numquam facilis et perferendis voluptatum porro aut. Perspiciatis voluptates repudiandae debitis ipsam.</p>
            <a href="#!" className='btn bnt-outline-secondary rounded-0'>
                go to this web 
            </a>
         </div>
    </div>
  )
} 
     export default CardEquipo
