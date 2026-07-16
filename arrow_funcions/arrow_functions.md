## Arrow Functions
<br>
Carácterísticas

- No requieren del uso de la palabra recervada **function**
- Retorno explicito: Sí la función es de una sola línea se pueden omitir
    - Llaves: {}
    - return
- Parámetros flexibles: sí solo recibe un parámetro se pueden omitie los ()
- Comportamiento de this: 
    - La función no crea su propio contexto **this**
    - En su lugar hereda el para **this** del hambito que la rodea ???

## Segundo ejemplo: persona
**persona.js** usa notacion normal de funcion
```bash
node
> .load persona.js
> persona.saludarTarde();
## persona is undefined
> Hola soyundefines
```
**persona_arrow** usa notacion arrow function
```bash
node
> .load persona_arrow.js
> persona.saludarTarde();
## persona is undefined
> Hola soy Ana
``` 
## Tercer ejemplo: Con fuction callbacks
Simulación de react
boton.js
```bash
node boton.js
Click en: Enviar
arrow_funcions/boton.js:12
callback();  // this es undefined aqui
```
En cambio
boton_arrow.js
```bash
arrow_funcions$ node boton_arrow.js 
Click en: Enviar
```
Acá es como si callback hubiera ejecutado hacerClick() y guardado el valor que pasó la consola

