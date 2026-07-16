class Boton {
    constructor (texto){
        this.texto = texto;
    }
    hacerClick(){
        console.log('Click en: ' + this.texto);
    }
}

const btn = new Boton('Enviar');
const callback = btn.hacerClick(); 
callback();  // this es undefined aqui
