const persona = {
    nombe: 'Ana',
    saludarTarde: function (){
        setTimeout(function () {
            console.log('Hola soy' + this.nombe);  // this es undefined aqui
        },1000);
    }
}
