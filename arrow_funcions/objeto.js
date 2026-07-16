const objeto = {
    nombre: 'mi Objeto',
    saludarRegular: function (){
        console.log(this.nombre); 
    },
    saludarArrow: () => {
        console.log(this.nombre);
    }
};
// este hay que usarlo en el navegador
console.log('Vamos a probar las funciones');
console.log('saludaRegular');
objeto.saludarRegular();
console.log('saludaArrow');
objeto.saludarArrow(); 