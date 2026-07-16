const persona = {
    nombre: 'Ana',
    saludarTarde: function (){
        setTimeout(() => {
            console.log('Hola soy ' + this.nombre);  // this se refiere a persona
        },1000);
    }
}   