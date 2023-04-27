<<<<<<< HEAD
desarrolloWeb
Profesor
    Emanuel Cabral
Tutor
    Dario Pirozzo
    Ismael Vasconel
    Luciano Staniszewski[Tutor adjunto]
Principios basicos
    Navegabilidad


Herramientas basicas
    HTML
        Estructura que vamos a generar en base a una web
            Etiqueta
            Atributo
            Estructura
    
    CSS
        Utilizado para diseñar el proyecto, sus estilos
        Terminos
            Estilo
            Reglas
            Medidas
            Fuente
    
    Diferencia entre WebSite y WebApp 
        https://blog.ida.cl/estrategia-digital-doferemcoas-aplicacion-web-sitio-web/
        Cuando hablamos de funcionalidad, necesitamos una aplicación web
    
    Diferencia entre Página web y Sitio web
        Una página es un documento HTML
        Un sitio web es un conjunto de documentos html relacionados, entre los cuales - 
        se puede navegar mediante el uso de enlaces o links

    Mockups
        Herramienta para crear esquemas de diseño de sitios webs.
        Balsamiq >> ya instalado!
        moqups >> herramienta que usaremos

{Clase 1        }
    
        Representaciones estéticas de un diseño en calidad media o alta

        para armar un buen prototipado es bueno:
            Agrupar contenidos relacionados
            Jerarquizar contenidos


        Elegir la tipografía correcta

        Armar nuestra propia paleta cromatica (Coolors, colourlovers, adobe color)

    HTML
        etiquetas
        Sirven para indicar los objetos del sitio
        <p>Esto es un párrafo</p>
        <hr>esto es una linea horizontal, no lleva la barra

        <!--esto es un comentario-->

        otra etiqueta que no posee cierre es
        <img src="link de la imagen">

        atributos de las etiquetas
            cualquier etiqueta puede tener un atributo y valor
            <etiqueta atributo="valor">
                contenido
            </etiqueta>
        
        anidar etiquetas
        <elemento>
            <subelemento>
                contenido
            </subelemento>
            contenido
        </elemento>
    
        etiqueta meta tampoco lleva cierre

        <!--atajos:
            al hacer esto: //h${mi titulo $}*6-->
            h${mi titulo $}*6

        etiqueta div
            divide la pagina en partes
            cada partefunciona como un contenedor
            ya no se usa, se usa la web semantica
            es decir, cada division tiene su definicion en el nombre mismo
            ejemplo:
                <article>articulo</article>
                <header></header>

{Clase 2        } //Primeros pasos con HTML

    comprender la arquitectura básica de un sitio web

    tenemos 3 tipos de enlaces
        externos o absolutos
            (direcciones web)
        internos y relativos
            dentro de nuestra propia web
        ancla
            dentro del mismo sitio web

    imagenes
        las declaramos con el recurso, su nombre su alto y su ancho. si o si hay que darle una de esas 2 dimensiónes 
            <img src="img/imagen.jpg" alt="Random" height="400px" width="auto">

    insertar un video de youtube
        vamos a compartir y elegimos la opción "Insertar", copiamos el iframe. 
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fzI9FNjXQ0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    insertar un mapa
        seleccionamos un lugar en el mapa de google (en este caso) vamos a compartir, luego en insertar un mapa y copiamos el iframe
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17908.312455019455!2d-58.547049095552445!3d-34.81944750558519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd0f4e2dea557%3A0xf19b6f81d441cc3b!2sAeropuerto%20Internacional%20Ezeiza!5e1!3m2!1ses!2sar!4v1679579775120!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
    incluir un icono
        lo hacemos con la etiqueta link rel= en el head
            <>


    Listas
        se declaran así:
            <h2>listas</h2>
            <h3>listas ordenadas</h3>
            <ol>type="A" </ol> //orderlist, vamos a ver el alfabeto en mayuscula si en type pongo A, si pongo i son los numeros romanos.
            <h2>listas desodrdenadas</h2>
            <ul>    </ul> //unorderList
            <h2>listas de definición</h2>
            <dl>    </dl> //definitionList


    Tablas
        se definen con 
    

{CLASE 3     INCLUYENDO CSS EN NUESTRO PROYECTO }

       CSS (Cascading Style sheets) es un lenguaje web para aplicar formato visual (color, estilos, etc)

       sintaxis

        selector {
            propiedad: valor;
            propiedad2: valor;
        } 

        padres e hijos

        cuando tenes una etiqueta anidada dentro de otra, lo que haces es aplicar el concepto de padres e hijos

            <section>
                padre
                <article>
                    hijo
                </article>
            </section>

        podemos declarar propiedades para los section y los articles, hasta sus parrafos

            section {
                padding: 50px 30px 20 px 60px;
                marging-left: 40px;
            }

            section article {
                padding: 50px 30px 20 px 60px;
                marging-left: 40px;
            }
            
        hay 3 formas de trabajar con css, la recomendada es hacerlo con la etiqueta link, de forma externa.
        tenemos una carpeta que se llama css y vamos a buscar todos los estilos ahí mediante "href"
             <link rel="stylesheet" href="styles.css"> // melhor forminha

        tambien podemos declararlo en el mismo html - mala practica

        tambien podemos sacar estilos en linea - mala practica

        cada etiqueta tiene un ID
            se usa para nombrar porciones de codigo y sectores
            es posible ponerle un ID a cualquier elemento HTML
            no es necesario escribir varias veces el mismo css ni repetir el ID
            <strong id="color1" class="subrayado">curso</strong>
            en el styles.css lo tendré con un numeral
                #color1 {
                    atributos
                }

         atributo class
            <img src="" class="bordesRedondeados" /> 
            en css se hacen así, con un punto al principio:
                .bordesRedondeados {
                    //codigo css de estilos
                }  
                si le agregamos un !important la clase pisa al ID, osea se pasa la jerarquia por el orto porque por lo visto el ID es mas importante que la
                class

                .bordesRedondeados {
                    color: culo !important;
                }  




            
        En CSS, tanto las clases como los IDs se utilizan para aplicar estilos a elementos HTML, pero hay algunas diferencias importantes entre ellos:

        Identificador (ID): un identificador es único en todo el documento HTML y solo puede aplicarse a un elemento en particular. Se utiliza para seleccionar un elemento específico y aplicar estilos únicos a ese elemento. Por ejemplo, puedes utilizar un ID para aplicar un estilo específico a un encabezado de página o a un botón de envío de un formulario.

        Clase: una clase puede aplicarse a múltiples elementos en un documento HTML. Se utiliza para aplicar estilos a varios elementos que comparten características comunes. Por ejemplo, puedes utilizar una clase para aplicar un estilo a todos los enlaces de una página o a todos los elementos de un formulario que tienen una determinada clase.

        En resumen, las clases se utilizan para aplicar estilos a múltiples elementos, mientras que los identificadores se utilizan para aplicar estilos a elementos individuales y únicos en un documento HTML. Es importante tener en cuenta que solo se debe utilizar un ID por elemento en un documento HTML y que, en general, se recomienda utilizar clases para aplicar estilos a los elementos en lugar de identificadores.        

        span
            En HTML, la etiqueta "span" se utiliza para agrupar elementos en línea y aplicar estilos a ellos. Es una etiqueta genérica y versátil que no tiene ningún significado específico en sí misma, sino que se utiliza para encapsular pequeños fragmentos de contenido en línea y aplicar estilos a ellos.
        
        em


        alineaciones de los textos;
            text-align: parametro;
            parametros = right, center, left, justify;

        text-transform: parametro;
        parametros = lowercase, uppercase, capitalize {iniciales en mayuscula};

        text-decoration: parametro;
        parametros = underline, overline, line-through;

        fuentes:
        font-size: 16px;
        font-family
        ponemos font- en vscode y vemos todas las posibilidades que hay 

        fondo de un div;
        background-
            vscode nos va a dar todas las posibilidades, pero si lo hacemos con un div

{CLASE 4         }


    CAMELCASE
    BOXMODEL
    WIDTH
    HEIGHT
    OVERFLOW

        css / reset css = una regla css que contiene definiciones para propiedades problemáticas que los diseñadores necesitan unificar desde 
            un principio
        class //clases de estilos
        padres e hijos // una etiqueta dentro de otra
        atributo ID //Identificador único e irrepetible
        unidades de medidas absolutas
            pixeles
        relativas
            rem: relativa a la configuración tamaño de la raiz (etiqueta html)
            porcentaje: 16px es 100%
            viewport: se utilizan para layouts responsivos

        sabemos que hay 3 formas de aplicar css a un documento html
            con la etiqueta html con el atributo style=
            en el head insertar la etiqueta <style>
            vincular eun archivo externo mediante una etiqueta <link/>. en su interior incluimos rel="Stylesheet", y href"stilos.css" en el head

        selección de html mediante css
            por etiqueta h1{ propiedad:valor}
            por clase .clase{propiedad: valor}
            por id #99{propiedad: valor}

        prefixes = prearreglos, normalize.css lo usa. 
            caniuse.com nos dice que podemos usar de acuerdo a la versión del navegador
            le aplicamos los prefixes desde caniuse para convertir nuestro sitio a que sea compatible con otras versiones

        camelcase = esEsto
            podemos tener <p class="bordesRedondeados">
            es para visualizar mejor simplemente

         tipografias =
            manejo todo desde el styles.css, hago @import url(link a las fuentes)
                @font-face {
        font-family: fuente;
        src: url(fonts/fuente.ttf);
}

        @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

        font-family: 'Rubik', sans-serif;

        como poner todas las cosas una al lado de la otra?
            h3{
                background-color: red;
                font-family: 'Rubik', sans-serif;
                display: inline;
            }

        propiedad overflow
            es cuando el texto se sale del borde de la página
            le decis overflow: hidden; y oculta lo que se salé de ahí

        box model

        propiedades en comun:
            content
                espacio para el texto
            padding
                espacio libre o aire entre contenido y borde de caja
            border
                limite entre el elemento y el espacio externo
            margin
                separación entre el borde y el afuera de la caja es parte del espacio externo

        podemos tener una clase bordes para ir armando todo
        así:
            .bordes{
            background-color: aqua;
            height: 200px;
            width: 400px;
            overflow: hidden;    
            padding: 20px 50px 100px 70px;
            border: 20px blue outset;
            margin: 20px 150px;
            }

        los elementos pueden ser 
        position: relative;

            sticky 
                (quedan pegados en la parte de la página en la que estan)
            fixed
                (se mueven junto con el usuario, como los anuncios de re mierda)
            relative
                

        PRIMER ENTREGA

         IR GENERANDO LA CARPETA RAIZ Y LOS ARCHIVOS
            carpeta del proyecto
                archivo estilos
                archivo index
                sitios
                    todos los sitios

        debe llamarse PreEntrega1+Apellido        
{Clase 5}
        
    conocer flexbox 

        metodología de diseño para posicionar y distribuir elementos 
        
        (h2#sec$.sec{mi titulo $}+section.cont.cont$)*4 esto te agrega clases, contenido, el punto significa clase el numeral significa que vamos a agregar un id y las llaves significa que vamos a agregar un contenido dentro de la etiqueta. 

    fuentes
        https://fontawesome.com/search?o=r&m=free

        https://cdnjs.com/

    practicar flexbox: 
    https://flexboxfroggy.com/#es

{Clase 6}

    mas flexbox 

    justify-content flex
    align-items flex
    align-content 
    baseline acomoda los objetos de forma horizontaldentro del contenedor
    space-evenly flex

    GRIDS
        insertamos varios elementos, todos los que querramos. 
{Clase 7}

    diseño responsive
        en una pagina responsive el sistema detecta automaticamente el ancho de la pantalla y a partir del mismo muestra el contenido
    media queries
        css ; maximos y minimos de ancho, su orientacion y demás. 
    
    .miestilo{
        background-color: green
    }
    @media (max-width: 480 px) and (max-width: 700px) esto da un minimo y un maximo para ese selector. 
        {.miestilo{
                text-align: left;
        }

    mobile first
        es un enfoque de desarrollo que implica crear el primer código para dispositivos mas pequeños como telefonos o tablets
        ir de 320 a 1200px para que la estructura quede bien

    web responsive designe 
        lo inverso a mobile first. Nos enfocamos en la pantalla de la pc y de ahí en adelante adaptamos nuestro diseño a mobile first. 
    
    META VIEWPORT
        una etiqueta 

{Clase 8}

    Pseudoclases
        es una palabra clase que se añade a los selectores y especifica un estado especial del elemento seleccionado. 

        :hover
        :active
        :link

    transition: le indicamos que se genere un cambio de la clase luego de determinado tiempo, ej;
        transition: 1.1s;
        supongamos que tenemos un hover, va a mostrarse el elemento de forma diferente cuando 
        hagamos click en la clase. 
    
    BEM
        una metodologia para que nuestro código sea mas fácil de leer. 
{Clase 9}

    pseudoclases: palabra clave que se añade a los selectores del css y que especifica un estado especial del elemento seleecionado. 
    
    librería
        coleccion de elementos, los usaremos para css. 
    framework:
        es el nombre que indica un marco de trabajo,
        se trata de un conjunto de herramientas y codigo, para enfocarse en una metodología.

    bootstrap
        es un framework desarrollado por twitter que permite crear interfaces web con css y javascript.
        Una de las caracteristicas mas interesantes es que adapta la interfaz del sitio web logrando sitios web responsive de forma sencilla

        bootstrap se basa en el uso de clases, que tienen asociados reglas css correspondientes para lograr los diferentes estilos. 
        para poder aplicarlos a cualquier elemento HTML

        D-flex

        descargar bootstrap
            instalando paquetes codigo compilado archivos para compilar o boostrap CDN(enlace directo )

            podemos buscar componentes 
    


=======
desarrolloWeb
Profesor
    Emanuel Cabral
Tutor
    Dario Pirozzo
    Ismael Vasconel
    Luciano Staniszewski[Tutor adjunto]
Principios basicos
    Navegabilidad


Herramientas basicas
    HTML
        Estructura que vamos a generar en base a una web
            Etiqueta
            Atributo
            Estructura
    
    CSS
        Utilizado para diseñar el proyecto, sus estilos
        Terminos
            Estilo
            Reglas
            Medidas
            Fuente
    
    Diferencia entre WebSite y WebApp 
        https://blog.ida.cl/estrategia-digital-doferemcoas-aplicacion-web-sitio-web/
        Cuando hablamos de funcionalidad, necesitamos una aplicación web
    
    Diferencia entre Página web y Sitio web
        Una página es un documento HTML
        Un sitio web es un conjunto de documentos html relacionados, entre los cuales - 
        se puede navegar mediante el uso de enlaces o links

    Mockups
        Herramienta para crear esquemas de diseño de sitios webs.
        Balsamiq >> ya instalado!
        moqups >> herramienta que usaremos

{Clase 1        }
    
        Representaciones estéticas de un diseño en calidad media o alta

        para armar un buen prototipado es bueno:
            Agrupar contenidos relacionados
            Jerarquizar contenidos


        Elegir la tipografía correcta

        Armar nuestra propia paleta cromatica (Coolors, colourlovers, adobe color)

    HTML
        etiquetas
        Sirven para indicar los objetos del sitio
        <p>Esto es un párrafo</p>
        <hr>esto es una linea horizontal, no lleva la barra

        <!--esto es un comentario-->

        otra etiqueta que no posee cierre es
        <img src="link de la imagen">

        atributos de las etiquetas
            cualquier etiqueta puede tener un atributo y valor
            <etiqueta atributo="valor">
                contenido
            </etiqueta>
        
        anidar etiquetas
        <elemento>
            <subelemento>
                contenido
            </subelemento>
            contenido
        </elemento>
    
        etiqueta meta tampoco lleva cierre

        <!--atajos:
            al hacer esto: //h${mi titulo $}*6-->
            h${mi titulo $}*6

        etiqueta div
            divide la pagina en partes
            cada partefunciona como un contenedor
            ya no se usa, se usa la web semantica
            es decir, cada division tiene su definicion en el nombre mismo
            ejemplo:
                <article>articulo</article>
                <header></header>

{Clase 2        } //Primeros pasos con HTML

    comprender la arquitectura básica de un sitio web

    tenemos 3 tipos de enlaces
        externos o absolutos
            (direcciones web)
        internos y relativos
            dentro de nuestra propia web
        ancla
            dentro del mismo sitio web

    imagenes
        las declaramos con el recurso, su nombre su alto y su ancho. si o si hay que darle una de esas 2 dimensiónes 
            <img src="img/imagen.jpg" alt="Random" height="400px" width="auto">

    insertar un video de youtube
        vamos a compartir y elegimos la opción "Insertar", copiamos el iframe. 
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fzI9FNjXQ0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    insertar un mapa
        seleccionamos un lugar en el mapa de google (en este caso) vamos a compartir, luego en insertar un mapa y copiamos el iframe
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17908.312455019455!2d-58.547049095552445!3d-34.81944750558519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd0f4e2dea557%3A0xf19b6f81d441cc3b!2sAeropuerto%20Internacional%20Ezeiza!5e1!3m2!1ses!2sar!4v1679579775120!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
    incluir un icono
        lo hacemos con la etiqueta link rel= en el head
            <>


    Listas
        se declaran así:
            <h2>listas</h2>
            <h3>listas ordenadas</h3>
            <ol>type="A" </ol> //orderlist, vamos a ver el alfabeto en mayuscula si en type pongo A, si pongo i son los numeros romanos.
            <h2>listas desodrdenadas</h2>
            <ul>    </ul> //unorderList
            <h2>listas de definición</h2>
            <dl>    </dl> //definitionList


    Tablas
        se definen con 
    

{CLASE 3     INCLUYENDO CSS EN NUESTRO PROYECTO }

       CSS (Cascading Style sheets) es un lenguaje web para aplicar formato visual (color, estilos, etc)

       sintaxis

        selector {
            propiedad: valor;
            propiedad2: valor;
        } 

        padres e hijos

        cuando tenes una etiqueta anidada dentro de otra, lo que haces es aplicar el concepto de padres e hijos

            <section>
                padre
                <article>
                    hijo
                </article>
            </section>

        podemos declarar propiedades para los section y los articles, hasta sus parrafos

            section {
                padding: 50px 30px 20 px 60px;
                marging-left: 40px;
            }

            section article {
                padding: 50px 30px 20 px 60px;
                marging-left: 40px;
            }
            
        hay 3 formas de trabajar con css, la recomendada es hacerlo con la etiqueta link, de forma externa.
        tenemos una carpeta que se llama css y vamos a buscar todos los estilos ahí mediante "href"
             <link rel="stylesheet" href="styles.css"> // melhor forminha

        tambien podemos declararlo en el mismo html - mala practica

        tambien podemos sacar estilos en linea - mala practica

        cada etiqueta tiene un ID
            se usa para nombrar porciones de codigo y sectores
            es posible ponerle un ID a cualquier elemento HTML
            no es necesario escribir varias veces el mismo css ni repetir el ID
            <strong id="color1" class="subrayado">curso</strong>
            en el styles.css lo tendré con un numeral
                #color1 {
                    atributos
                }

         atributo class
            <img src="" class="bordesRedondeados" /> 
            en css se hacen así, con un punto al principio:
                .bordesRedondeados {
                    //codigo css de estilos
                }  
                si le agregamos un !important la clase pisa al ID, osea se pasa la jerarquia por el orto porque por lo visto el ID es mas importante que la
                class

                .bordesRedondeados {
                    color: culo !important;
                }  




            
        En CSS, tanto las clases como los IDs se utilizan para aplicar estilos a elementos HTML, pero hay algunas diferencias importantes entre ellos:

        Identificador (ID): un identificador es único en todo el documento HTML y solo puede aplicarse a un elemento en particular. Se utiliza para seleccionar un elemento específico y aplicar estilos únicos a ese elemento. Por ejemplo, puedes utilizar un ID para aplicar un estilo específico a un encabezado de página o a un botón de envío de un formulario.

        Clase: una clase puede aplicarse a múltiples elementos en un documento HTML. Se utiliza para aplicar estilos a varios elementos que comparten características comunes. Por ejemplo, puedes utilizar una clase para aplicar un estilo a todos los enlaces de una página o a todos los elementos de un formulario que tienen una determinada clase.

        En resumen, las clases se utilizan para aplicar estilos a múltiples elementos, mientras que los identificadores se utilizan para aplicar estilos a elementos individuales y únicos en un documento HTML. Es importante tener en cuenta que solo se debe utilizar un ID por elemento en un documento HTML y que, en general, se recomienda utilizar clases para aplicar estilos a los elementos en lugar de identificadores.        

        span
            En HTML, la etiqueta "span" se utiliza para agrupar elementos en línea y aplicar estilos a ellos. Es una etiqueta genérica y versátil que no tiene ningún significado específico en sí misma, sino que se utiliza para encapsular pequeños fragmentos de contenido en línea y aplicar estilos a ellos.
        
        em


        alineaciones de los textos;
            text-align: parametro;
            parametros = right, center, left, justify;

        text-transform: parametro;
        parametros = lowercase, uppercase, capitalize {iniciales en mayuscula};

        text-decoration: parametro;
        parametros = underline, overline, line-through;

        fuentes:
        font-size: 16px;
        font-family
        ponemos font- en vscode y vemos todas las posibilidades que hay 

        fondo de un div;
        background-
            vscode nos va a dar todas las posibilidades, pero si lo hacemos con un div

{CLASE 4         }


    CAMELCASE
    BOXMODEL
    WIDTH
    HEIGHT
    OVERFLOW

        css / reset css = una regla css que contiene definiciones para propiedades problemáticas que los diseñadores necesitan unificar desde 
            un principio
        class //clases de estilos
        padres e hijos // una etiqueta dentro de otra
        atributo ID //Identificador único e irrepetible
        unidades de medidas absolutas
            pixeles
        relativas
            rem: relativa a la configuración tamaño de la raiz (etiqueta html)
            porcentaje: 16px es 100%
            viewport: se utilizan para layouts responsivos

        sabemos que hay 3 formas de aplicar css a un documento html
            con la etiqueta html con el atributo style=
            en el head insertar la etiqueta <style>
            vincular eun archivo externo mediante una etiqueta <link/>. en su interior incluimos rel="Stylesheet", y href"stilos.css" en el head

        selección de html mediante css
            por etiqueta h1{ propiedad:valor}
            por clase .clase{propiedad: valor}
            por id #99{propiedad: valor}

        prefixes = prearreglos, normalize.css lo usa. 
            caniuse.com nos dice que podemos usar de acuerdo a la versión del navegador
            le aplicamos los prefixes desde caniuse para convertir nuestro sitio a que sea compatible con otras versiones

        camelcase = esEsto
            podemos tener <p class="bordesRedondeados">
            es para visualizar mejor simplemente

         tipografias =
            manejo todo desde el styles.css, hago @import url(link a las fuentes)
                @font-face {
        font-family: fuente;
        src: url(fonts/fuente.ttf);
}

        @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

        font-family: 'Rubik', sans-serif;

        como poner todas las cosas una al lado de la otra?
            h3{
                background-color: red;
                font-family: 'Rubik', sans-serif;
                display: inline;
            }

        propiedad overflow
            es cuando el texto se sale del borde de la página
            le decis overflow: hidden; y oculta lo que se salé de ahí

        box model

        propiedades en comun:
            content
                espacio para el texto
            padding
                espacio libre o aire entre contenido y borde de caja
            border
                limite entre el elemento y el espacio externo
            margin
                separación entre el borde y el afuera de la caja es parte del espacio externo

        podemos tener una clase bordes para ir armando todo
        así:
            .bordes{
            background-color: aqua;
            height: 200px;
            width: 400px;
            overflow: hidden;    
            padding: 20px 50px 100px 70px;
            border: 20px blue outset;
            margin: 20px 150px;
            }

        los elementos pueden ser 
        position: relative;

            sticky 
                (quedan pegados en la parte de la página en la que estan)
            fixed
                (se mueven junto con el usuario, como los anuncios de re mierda)
            relative
                

        PRIMER ENTREGA

         IR GENERANDO LA CARPETA RAIZ Y LOS ARCHIVOS
            carpeta del proyecto
                archivo estilos
                archivo index
                sitios
                    todos los sitios

        debe llamarse PreEntrega1+Apellido        
{Clase 5}
        
    conocer flexbox 

        metodología de diseño para posicionar y distribuir elementos 
        
        (h2#sec$.sec{mi titulo $}+section.cont.cont$)*4 esto te agrega clases, contenido, el punto significa clase el numeral significa que vamos a agregar un id y las llaves significa que vamos a agregar un contenido dentro de la etiqueta. 

    fuentes
        https://fontawesome.com/search?o=r&m=free

        https://cdnjs.com/

    practicar flexbox: 
    https://flexboxfroggy.com/#es

{Clase 6}

    mas flexbox 

    justify-content flex
    align-items flex
    align-content 
    baseline acomoda los objetos de forma horizontaldentro del contenedor
    space-evenly flex

    GRIDS
        insertamos varios elementos, todos los que querramos. 
{Clase 7}

    diseño responsive
        en una pagina responsive el sistema detecta automaticamente el ancho de la pantalla y a partir del mismo muestra el contenido
    media queries
        css ; maximos y minimos de ancho, su orientacion y demás. 
    
    .miestilo{
        background-color: green
    }
    @media (max-width: 480 px) and (max-width: 700px) esto da un minimo y un maximo para ese selector. 
        {.miestilo{
                text-align: left;
        }

    mobile first
        es un enfoque de desarrollo que implica crear el primer código para dispositivos mas pequeños como telefonos o tablets
        ir de 320 a 1200px para que la estructura quede bien

    web responsive designe 
        lo inverso a mobile first. Nos enfocamos en la pantalla de la pc y de ahí en adelante adaptamos nuestro diseño a mobile first. 
    
    META VIEWPORT
        una etiqueta 

{Clase 8}

    Pseudoclases
        es una palabra clase que se añade a los selectores y especifica un estado especial del elemento seleccionado. 

        :hover
        :active
        :link

    transition: le indicamos que se genere un cambio de la clase luego de determinado tiempo, ej;
        transition: 1.1s;
        supongamos que tenemos un hover, va a mostrarse el elemento de forma diferente cuando 
        hagamos click en la clase. 
    
    BEM
        una metodologia para que nuestro código sea mas fácil de leer. 
{Clase 9}

    pseudoclases: palabra clave que se añade a los selectores del css y que especifica un estado especial del elemento seleecionado. 
    
    librería
        coleccion de elementos, los usaremos para css. 
    framework:
        es el nombre que indica un marco de trabajo,
        se trata de un conjunto de herramientas y codigo, para enfocarse en una metodología.

    bootstrap
        es un framework desarrollado por twitter que permite crear interfaces web con css y javascript.
        Una de las caracteristicas mas interesantes es que adapta la interfaz del sitio web logrando sitios web responsive de forma sencilla

        bootstrap se basa en el uso de clases, que tienen asociados reglas css correspondientes para lograr los diferentes estilos. 
        para poder aplicarlos a cualquier elemento HTML

        D-flex

        descargar bootstrap
            instalando paquetes codigo compilado archivos para compilar o boostrap CDN(enlace directo )

            podemos buscar componentes 
    


>>>>>>> origin/main
