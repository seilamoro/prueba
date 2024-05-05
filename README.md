# Autor

Sheila Moro Herrero

## Dependencias

El proyecto utiliza las siguientes dependencias:
  * @tanstack/react-query v5.34.1
  * react-dom v18.3.0
  * react-axios v2.0.6
  * cypress v13.8.1

### Instalación de las dependencias

Para instalar las dependencias es necesario situarse en la raíz del proyecto y ejecutar el comando:
```
npm install
```
o
```
yarn install
```

## Ejecución de la aplicación

La aplicación tiene dos modos de ejecución:

### Modo development

En este modo se sirven los assets sin minimizar, y se ejecuta con el comando desde la carpeta raíz del proyecto:
```
npm start
```
o
```
yarn start
```

### Modo production

En este modo se sirven los assets concatenados y minimizados, y se ejecuta con el comando desde la carpeta raíz del proyecto:
```
npm run build
```
o
```
yarn run build
```
Con este comando se crea la carpeta 'build', donde se generan los ficheros estáticos para producción.
Se puede servir la aplicación usando un servidor estático, ejecutando los siguientes comandos desde la carpeta raíz del proyecto:
```
npm install -g serve
serve -s build
```
o
```
yarn global add serve
serve -s build
```
