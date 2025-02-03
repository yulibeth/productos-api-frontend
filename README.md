Aplicación Frontend CRUD - Gestión de Productos
Esta es la aplicación frontend para gestionar productos. Está construida con React y se comunica con un backend en Spring Boot para realizar operaciones CRUD sobre los productos.

Tecnologías Utilizadas
React: Biblioteca para construir interfaces de usuario.
Axios: Cliente HTTP para hacer peticiones al backend.
Bootstrap: Framework CSS para mejorar el diseño y la estructura visual de la aplicación.
Requisitos Previos
Tener Node.js y npm instalados en tu máquina.
Tener el backend en Spring Boot corriendo para que la aplicación pueda interactuar con él.

1. Clonar el Repositorio

git clone <repository_url>
cd <directorio_del_proyecto>
2. Instalar Dependencias
Primero, instala las dependencias del proyecto usando npm o yarn:

npm install
3. Configuración del Backend
Asegúrate de que el backend esté corriendo y configurado correctamente. El frontend hace peticiones a la API REST del backend, por lo que es importante que esté disponible en http://localhost:8080.

Si necesitas instrucciones sobre cómo configurar el backend, consulta el README del backend.

4. Ejecutar la Aplicación
Para iniciar la aplicación en modo de desarrollo, usa el siguiente comando:


npm start
Esto abrirá la aplicación en tu navegador en http://localhost:3000.

Funcionalidades
1. Listar Productos
La página principal muestra un listado de todos los productos. Los productos son recuperados mediante una solicitud GET al backend.

2. Agregar Producto
Un formulario permite agregar nuevos productos al sistema. Los campos son:

Nombre
Descripción
Precio
Cantidad en Stock
Al enviar el formulario, se realiza una solicitud POST al backend para agregar el producto, y la lista de productos NO se recarga automáticamente por lo cual se debe actualizar la pagina manualmente.

3. Editar Producto
Los productos tienen un botón de "Editar". Al hacer clic en él, se carga el formulario de edición con los datos actuales del producto. Al guardar los cambios, se realiza una solicitud PUT para actualizar el producto en la base de datos.

4. Eliminar Producto
Cada producto tiene un botón de "Eliminar". Al hacer clic en él, se realiza una solicitud DELETE al backend para eliminar el producto de la base de datos.

5. combinar productos

Estructura del Proyecto
bash
Copiar
Editar
/src
  /components
    ProductForm.js      # Formulario para agregar un nuevo producto.
    ProductList.js      # Listado de productos y opciones para editar/eliminar.
    ProductCombinations.js      # Listado de productos combinados.
  /App.js               # Componente principal de la aplicación.
  /index.js             # Punto de entrada de la aplicación React.
Dependencias
react: Biblioteca principal para construir interfaces.
axios: Cliente HTTP para interactuar con el backend.
react-bootstrap: Para utilizar componentes de Bootstrap en React.
bootstrap: Framework CSS utilizado para el diseño.
