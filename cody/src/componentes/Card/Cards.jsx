import React from "react";
import Card from "./Card.jsx";

import imagen1 from '/Users/Usuario/about-us/src/imagenes/imagen1.jpg'
import proyecto from '/Users/Usuario/about-us/src/imagenes/proyecto.jpg'
import equipo from '/Users/Usuario/about-us/src/imagenes/equipo.jpg'


const cards = [
  {
    id: 1,
    title: "Antartida",
    image: imagen1,
    url: "https://www.nationalgeographic.com.es/mundo-ng/cuanto-sabes-sobre-antartida_15868",
  },
  {
    id: 2,
    title: "Idea principal",
    image: proyecto,
    url: "https://enciclopedia.net/idea-principal/",
  },
  {
    id: 3,
    title: "Equipo de desarrollo",
    image: equipo,
    url: "https://projectcor.com/es/blog/roles-fundamentales-en-un-equipo-de-desarrollo-de-software/",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Cards;