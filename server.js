//express web server
const express = require('express');
const app = express();
const w1Controllers = require('./controllers/app-week1')
 
app.get('/',w1Controllers.home);

app.get('/1', w1Controllers.one);

app.get('/2', w1Controllers.two);

// Creamos un endpoint GET que retorne un objeto JSON
app.get('/api/perfil', (req, res) => {
  // Simulamos los datos que podrían venir de una base de datos o como parámetros
  const data = {
    professionalName: 'Juan Pérez',
    base64Image: 'data:image/png;base64,iVBORw0K...', // Aquí iría la imagen en base64
    primaryDescription: 'Soy un desarrollador web con 5 años de experiencia...',
    workDescription: 'Trabajo en el desarrollo de aplicaciones web modernas usando React, Node.js...',
    linkTitleText: 'Mi Portafolio',
    linkedInLink: 'https://www.linkedin.com/in/juanperez/',
    gitHubLink: 'https://github.com/juanperez'
  };

  // Construimos el objeto final
  const responseObject = {
    professionalName: data.professionalName,
    image: data.base64Image,
    primaryDescription: data.primaryDescription,
    workDescription: data.workDescription,
    linkTitleText: data.linkTitleText,
    linkedInLink: data.linkedInLink,
    gitHubLink: data.gitHubLink
  };

  // Retornamos el objeto como respuesta en formato JSON
  res.json(responseObject);
});

 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});

