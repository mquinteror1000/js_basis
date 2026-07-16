class Boton {
    constructor(texto){
        this.texto = texto;
    }
    hacerClick = () => {
        console.log('Click en: ' + this.texto);
    }
}

const btn = new Boton('Enviar');
callback = btn.hacerClick;
callback();  /* Aca es como si callback hubiera ejecutado hacerClick() y gusrdado el resultado de console.log */


