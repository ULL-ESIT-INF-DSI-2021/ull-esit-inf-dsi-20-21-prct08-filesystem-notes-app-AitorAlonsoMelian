[![Tests](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-AitorAlonsoMelian/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-AitorAlonsoMelian/actions/workflows/node.js.yml)
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
Todos los comandos realizados están basados en el ejemplo del que se dispone en el guión de la práctica, ya que todos son comandos sencillos.

La única funcionalidad que tiene este fichero, aparte de gestionar los parámetros, es crear un objeto `noteApp` que contendrá todos los métodos necesarios para la gestión de ficheros de las notas. Cada comando, en su método `handler` llama a su método correspondiente de la clase `noteApp` pasandole los parámetros que necesita.

### [Gestión de ficheros/notas (noteApp.ts)](./src/noteApp.ts)

Para la gestión de ficheros/notas he decidido crear la clase `noteApp` que contiene todos los métodos necesarios para esto. La clase no tiene atributos, simplemente son los métodos los que implementan la funcionalidad. Los métodos de los que dispone la clase son:
- addNote(user, title, body, color)
- deleteNote(user, title)
- modifyNote(user, title, body, color)
- listNotes(user)
- readNotes(user, title)

El método `addNote` recibe todos los parámetros, ya que los necesita todos. Lo primero que hago es construir la variable `path` y la variable `content`. La variable path la construyo concatenando los strings necesarios, con user y title, de manera que al final quede, por ejemplo un path de la siguiente manera: `Notas/Usuario/Titulo.json`. Este path, junto con el contenido es necesario para pasárselo como argumento a la función `fs.writeFileSync(path, content)`, que creará el fichero en `path`, con el contenido que haya en `content`. 
En cuanto a la variable `content`
