[![Tests](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-AitorAlonsoMelian/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-AitorAlonsoMelian/actions/workflows/node.js.yml)
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
En cuanto a la variable `content`, esta crea un objeto json, que llena con el contenido del parámetro `body` y `color`. 
Una vez creadas ambas variables, se realizan varias comparaciones. Primero se comprueba si el archivo que se está intentando crear NO existe, de manera que podamos crearlo. Segundo, se comprueba si el usuario tiene un directorio dentro de `Notas` es decir, si ha creado ficheros antes, en caso negativo, se crea la carpeta con el nombre de este usuario. En el caso de que si exista, simplemente sigue la ejecución de el código, y acaba creando el archivo y retornando un 1, y mostrando un mensaje por pantalla si todo ha salido bien.

El método `deleteNote` recibe el usuario y el título de la nota. Construye igual que el método anterior la variable `path`, y en este caso también, la variable `dirPath`, que no es mas que el directorio del usuario.
Primero comprueba si existe el archivo que queremos borrar, y en caso de que exista, lo borra. La siguiente comprobación es para ver si el directorio del usuario ha quedado vacío, en cuyo caso eliminamos el directorio, para no tener directorios vacíos.

El método `modifyNote` funciona muy parecido al método `addNote`, con la diferencia de que, en `addNote` comprobabamos que NO existiera el archivo para poder crear uno nuevo, y en `modifyNote` comprobamos que SI existe el archivo para poder editarlo. Esto es gracias a que el método `fs.writeFileSync()` sustituye el contenido del fichero, en caso de que lo hubiera.

El método `listNotes` muestra todas las notas del usuario `user`, y además las imprime los títulos por consola con el color que tenga esa nota. Para realizar esto uso la función `fs.readdirSync` y le paso el `dirPath`, que como mencioné anteriormente, es el path que lleva al fichero del usuario. Este método devuelve un array con todos los nombres de los ficheros contenidos en el directorio de `dirPath`. Itero sobre este array de nombres de ficheros, de manera que, leo cada uno de los ficheros, y saco el contenido del atributo `color`, para poder imprimir por pantalla el nombre del fichero con el color adecuado.

Finalmente, el método `readNote`, tiene el objetivo de imprimir por consola el contenido de la nota, del color adecuado. Para ello sólo necesita los parámetros `user` y `title`. Para ello se hace uso de la función `fs.readFileSync()` que devuelve el contenido de un fichero, que es guardado en la variable `content`. Como lo que devuelve esa función es un string, uso `JSON.parse()` para transformarlo a un objeto JSON, y así poder acceder mas fácilmente a sus atributos. Una vez conseguidos sus atributos, que son `body` y `color`, solo queda imprimir por pantalla el mensaje `body` con el color `color`.

### Problemas

Para finalizar me gustaría comentar que he tenido un problema con el coverage de SonarCloud, que es supuestamente 0%, a pesar de que el coveralls indica que es del 85%, cosa que no he conseguido solucionar. A causa de esto sale la `x` roja en el repositorio de GitHub, y obviamente la qualityGate de SonarCloud falla, así que he decidido quitar la badge de SonarCloud. El resto de actions, tests y coveralls, son ejecutados correctamente.