class Temporizador {
  constructor() {
    this.segundos = 0;
  }
  iniciar() {
    setTimeout(function() {
      this.segundos++;
      console.log(this.segundos);
    }, 1000);
  }
}
const temp = new Temporizador();
temp.iniciar();