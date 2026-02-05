import React from 'react';

export function Content () {
  return (
    <section className="app-section-content">
      <div className='section-content-subSection'>
        <h1>Sobre mi</h1>
        <p>Mi objetivo es especializarme en el desarrollo web, con un enfoque inicial en el desarrollo Frontend y p
          lanes de expandir mis habilidades hacia el Backend. Cuento con experiencia en tecnologías como HTML, CSS, JavaScript y 
          actualmente estoy avanzando en el dominio de React. Además, tengo conocimientos en bases de datos SQL. 
          Me apasiona crear sitios web escalables, eficientes y centrados en la experiencia del usuario. Poseo habilidades 
          de trabajo en equipo, resolución de problemas y aprendizaje colaborativo, lo que me permite adaptarme rápidamente 
          a nuevos desafíos y contribuir al éxito de los proyectos.</p>
      </div>
      <div className='section-content-subSection'>
        <h1>Habilidades Tecnicas</h1>
        <p><strong>Frontend:</strong> HTML5, CSS3, JavaScript, React (Empezando), Bootstrap</p>
        <p><strong>Backend:</strong> Pendiente...</p>
        <p><strong>Bases de Datos:</strong> SQL</p>
        <p><strong>Version Control:</strong> Git (basico), GitHub (basico)</p>
      </div>
      <div className='section-content-subSection'>
        <h1>Eduación</h1>
        <ul className='content-subSection-contentlist'>
          <li>∗ Primaria <strong className='content-subSection-contentYear'>2009 - 2015</strong></li>
          <li>∗ Secundaria <strong className='content-subSection-contentYear'>2016 - 2020</strong></li>
          <li>∗ Superior <strong className='content-subSection-contentYear'>2021 - ...</strong></li>
        </ul>
      </div>
    </section>
  );
};

