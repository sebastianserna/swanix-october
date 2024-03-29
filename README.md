![Swan UI](https://github.com/acuariux/swan-october/blob/master/assets/images/logo.png "Swan - User Interface")

Experimental UI framework. Work in progress...


Swan October Theme
==========

Este proyecto es una adaptación del framework Swan como theme multipropósito para October CMS.

## Requisitos

Para probar y editar los archivos fuente del theme debemos tener previamente instalados:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (versión 4 o superior)
- [October CMS](https://octobercms.com/docs/setup/installation)  (en servidor local con Mamp o Wamp)

## Instalación

En la carpeta de nuestro sitio local en October CMS clonamos los archivos del repositorio dentro de la carpeta `themes`:

```
$ git clone https://github.com/acuariux/swan-october.git
```

Luego abrimos con la terminal la carpeta creada `swan-october` y escribimos el comando:

```
$ npm install
```
Este comando instalará las dependencias de Node.js especificadas en el archivo `package.json` (en esencia se trata de [Gulp.js](http://gulpjs.com/) y una serie de plugins necesarios para automatizar algunas tareas de desarrollo).

Las dependencias se instalan en la carpeta `node_modules` (creada automáticamente con el comando `npm install`) y luego de instaladas podemos utilizar Gulp para ejecutar nuestra página de prueba con:

```
$ gulp watch
```
El comando `gulp watch` ejecuta unas tareas específicas para compilar el código de estilos CSS del theme y los cambios en los archivos HTML y Javascript.

## Estructura de Directorios

```sh
swan-october/
│
├── assets/           # Recursos globales  
│   ├── images/       
│   ├── scripts/      
│   └── styles/
│       
├── layouts/          # Plantillas HTML
├── pages/            # Páginas estáticas
├── partials/         # Código HTML reutilizable
├── theme.yaml        # Descripción y dependencias
└── version.yaml      # Versión del theme
│
└---------------------------------------------------------

```


### Arquitectura Sass (Alpha)

El core de Swan sigue el [ Patrón 7-1](https://sass-guidelin.es/#the-7-1-pattern).

```sh
styles/
│
├── sass/
│   ├── core/
│   │   ├── abstract/       # Mixins & Variables
│   │   ├── base/           # Base Elements
│   │   ├── Pages/          # Individual Page Styles
│   │   ├── layout/         # Layout & Structure
│   │   ├── components/     # Components & Patterns
│   │   ├── themes/         # Themes (White / Black)
│   │   ├── vendors/        # Vendor Libraries
│   │   └── _core.scss      # Swan Core Package
│   └── theme.scss          # Styles Final Package
│
├── css/
│   ├── theme.min.css      # Compiled CSS (min)
│   └── theme.css          # Compiled CSS
│
└---------------------------------------------------------

```
Cuando ejecutamos el comando `gulp watch` cualquier cambio realizado en los archivos de la carpeta `/styles/sass` se compilarán en la carpeta `/styles/css` con el plugin `gulp-sass`.

## Librerías CSS

Swan utiliza las siguientes librerías de código CSS creadas por terceros:

|Librería|Versión|Descripción|
|--- |--- |--- |
|Normalize|3.0.2|Permite normalizar estilos CSS por defecto entre navegadores|
|Bourbon|4.2.7|Librería de Mixins para Sass|
|Neat|1.8.0|Grid semántico basado en Bourbon|

## Módulos de Node.js

Para el desarrollo se utilizan los siguientes módulos de Node.js (la mayoría son plugins de Gulp).

|Módulo|Versión|Descripción|
|--- |--- |--- |
|browser-sync|2.18.2|Permite ejecutar un servidor local y visualizar nuestro sitio en múltiples navegadores remotos en tiempo real.|
|gulp|3.9.1|Módulo oficial de Gulp para Node.js|
|gulp-install|0.6.0|Instala de forma automática paquetes y dependencias de npm, bower, tsd, y pip si la configuración asociada se encuentra en el gulpfile.|
|gulp-autoprefixer|3.1.1|Permite automatizar la escritura de prefijos CSS para cada navegador web (moz, webkit, etc).|
|gulp-sass|2.3.2|Permite compilar código Sass en CSS sin necesidad de instalar la gema de Sass de Ruby, solo desde Node.js|
|gulp-clean-css|2.0.13|Permite minificar el código CSS eliminando espacios y comentarios. Este tipo de prácticas se utilizan para generar código listo para un ambiente de producción.|
|gulp-rename|1.2.2|Permite renombrar archivos con el nombre que le especifiquemos|
|gulp-concat|2.6.1|Permite fusionar archivos en uno solo para optimizar el tiempo de carga de dependencias en un sitio web (muy utilizado para combinar archivos CSS o archivos JavaScript).|
|gulp-plumber|1.1.0|Permite manejar e identificar errores en tiempo de ejecución.|
|gulp-sourcemaps|1.9.1|Permite generar sourcemaps para el código Sass y otros.|
|gulp-uglify|2.0.0|Permite minificar el código JavaScript con UglifyJS.|
|sassdoc|2.1.20|Genera una documentación básica del código Sass utilizado.|


## Licencia

The MIT License (MIT)

Copyright (c) 2015-2017 Sebastian Serna

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
