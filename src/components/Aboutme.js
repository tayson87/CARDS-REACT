import React from 'react';

const aboutme = () => {
    const dato = {
        nombre: " Juan Pablo ",
        edad: "34",
        pelicula: "iron man",
        musica: "rock"
    }
    return (
        <div class name = "contenedor">
            <ul>
                <li>
                    <b>Nombre:</b> {dato.nombre}
                </li>
                <li>
                    <b>Edad:</b> {dato.edad}
                </li>
                <li>
                    <b>Pelicula:</b> {dato.pelicula}
                </li>
                <li>
                    <b>Musica:</b> {dato.musica}
                </li>
            </ul>
            
        </div>
    );
};

export default aboutme;