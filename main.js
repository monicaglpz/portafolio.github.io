let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #f870ba;">Estudiante de Ingeniería en Informática</span>')
  .typeString('<span style="color: #f870ba;"> || Front End Developer</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();