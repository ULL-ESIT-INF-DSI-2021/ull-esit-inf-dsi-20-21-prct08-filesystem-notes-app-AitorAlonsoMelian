[![Tests](https://github.com/AitorAlonsoMelian/Typescript-Template/actions/workflows/node.js.yml/badge.svg)](https://github.com/AitorAlonsoMelian/Typescript-Template/actions/workflows/node.js.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2021_ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-AitorAlonsoMelian&metric=alert_status)](https://sonarcloud.io/dashboard?id=ULL-ESIT-INF-DSI-2021_ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-AitorAlonsoMelian)
[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-AitorAlonsoMelian/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-AitorAlonsoMelian?branch=master)

# Práctica 8 - Aplicación de procesamiento de notas de texto

## Datos
  * **Autor:** Aitor Alonso Melián
  * **Contacto:** alu0101122496@ull.edu.es
  * **Universidad:** Universidad de La Laguna
  * **Asignatura:** Desarrollo de Sistemas informáticos

## Introducción
En esta práctica se implementará una aplicación de procesamiento de notas de texto. Se podrán añadir, modificar, eliminar, listar y leer notas de texto. Las notas se almacenarán como ficheros JSON en en el sistema de ficheros de la máquina que se ejecute, y solo se podrá interactuar con la aplicación desde la línea de comandos. El código fuente está disponible en el [repositorio](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-AitorAlonsoMelian) y el informe en la [Github Page](https://ull-esit-inf-dsi-2021.github.io/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-AitorAlonsoMelian/)

## Desarrollo
### [Gestión de parámetros (index.ts)](./src/index.ts)
Para la gestión de parámetros utilizo la librería yargs en el fichero index.ts. En este fichero se declaran cada uno de los comandos necesarios para la utilización de los ficheros de manera interactiva. Estos comandos son: 
- add: Añade una nota
- read: Lee una nota
- delete: Borra una nota
- list: Lista las notas de un usuario
- modify: Modifica una nota

Los parámetros que se usan en el programa son: 
- user: Usuario
- title: Título de la nota
- body: Contenido de la nota
- color: Color de la nota

No todos los comandos necesitan de todos los parámetros, ya que, por ejemplo, para listar todas las notas del usuario, solo necesitas el nombre del usuario, en cambio para añadir una nota, necesitas todos los parámetros anteriormente mencionados.

### [Gestión de ficheros/notas (noteApp.ts)](./src/noteApp.ts)

