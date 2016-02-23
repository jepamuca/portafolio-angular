Para iniciar a usar la plantilla se debe usar
    
    npm install  -> Para instalar las dependencias que se encuentran en package.json
    bower install -> Para instalar las dependencias que se encuentran en bower.json

Para desarrollo se recomiendan los siguientes pasos

    1. Configurar las dependencias instaladas con bower
            gulp bower

    2. El servidor de desarrollo se puede correr usando alguno de los siguiente comandos
            gulp
            gulp desarrollo

Para producción se recomiendan los siguientes pasos

    1. Limpiar carpeta ./dist
            gulp limpiar

    2. Tareas para optimizar el código
            gulp optimizar1
            gulp optimizar2

    3. Iniciar Servidor Producción
            gulp produccion




Ruberney Rodríguez Valderrama...